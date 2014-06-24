/*jslint node: true*/
/*global io*/
/*jslint plusplus: true */
"use strict";
var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    https = require('https'),
    fs = require('fs'),
    http = require('http'),
    bcrypt = require('bcrypt-nodejs'),
    sqlite3 = require('sqlite3').verbose(),
    port = 443,
    
    options = {
        key: fs.readFileSync('keys/skra.key'),
        cert: fs.readFileSync('keys/skra_org.crt'),
        ca: [fs.readFileSync('keys/AddTrustExternalCARoot.crt'), fs.readFileSync('keys/COMODORSAAddTrustCA.crt'),  fs.readFileSync('keys/COMODORSADomainValidationSecureServerCA.crt')]
    },
    
    server = https.createServer(options, app).listen(port, 'skra.org', function () {
        console.log("Express server listening on port " + port);
    });

var io = require('socket.io').listen(server);

//redirects to https
var httpApp = express();
var httpRouter = express.Router();
httpApp.use('*', httpRouter);
httpRouter.get('*', function (req, res) {
    var destination = 'https://skra.org:443';
    return res.redirect(destination);
});
var httpServer = http.createServer(httpApp);
httpServer.listen(80, 'skra.org');

//database setup if not already there
var db = new sqlite3.Database('public/data/data.db');
db.run("create table if not exists USERS (userid INTEGER PRIMARY KEY, user TEXT, password TEXT, email TEXT, name TEXT, weight NUMERIC, height NUMERIC, age NUMERIC)");


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

function checkNumeric(value) {
    var check = value.split(''),
        isValid,
        i;
    if (value !== "") {
        for (i = 0; i < value.length; i++) {
            if (isValid === false) { break; }
            if (parseFloat(check[i]) || check[i] === '0') {
                isValid = true;
            } else {
                isValid = false;
            }
        }
        return isValid;
    } else {
        return false;
    }
}

function verifyRegistry(data) {
    var username = data.username,
        password = data.password,
        confpass = data.confpass,
        email = data.email,
        name = data.name,
        weight = data.weight,
        height = data.height,
        age = data.age,
        atpos = email.indexOf("@"),
        dotpos = email.lastIndexOf(".");
    
    db.serialize(function () {
        db.all("SELECT * FROM USERS WHERE user = ? LIMIT 1", username, function (err, rows) {
            if (rows[0]) {
                return false;
            }
        });
    });
    
    if (confpass === "" || confpass !== password) {
        return false;
    } else if (email !== "") {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            return false;
        }
    }
    if (email === "") {
        return false;
    } else if (name === "" || name.length < 1) {
        return false;
    } else if (checkNumeric(weight) && checkNumeric(height) && checkNumeric(age)) {
        return true;
    }
}

io.sockets.on('connection', function (socket) {
    
    socket.on('register', function (data) {
        if (verifyRegistry(data)) {
            var username = data.username,
                password = data.password,
                email = data.email,
                name = data.name,
                weight = data.weight,
                height = data.height,
                age = data.age,
                hash = bcrypt.hashSync(password);

            db.serialize(function () {
                var stmt = db.prepare("INSERT INTO USERS (user, password, email, name, weight, height, age) VALUES (?,?,?,?,?,?,?)");
                stmt.run(username, hash, email, name, weight, height, age);
                stmt.finalize();
            });
        } else {
            var send = { valid: false};
            socket.emit("wronglyreg", send);
        }
    });
    
    socket.on('login', function (data) {
        var username = data.username,
            password = data.password,
            login;
        db.serialize(function () {
            db.all("SELECT password FROM USERS WHERE user = ? LIMIT 1", username, function (err, rows) {
                if (rows[0]) {
                    bcrypt.compare(password, rows[0].password, function (err, res) {
                        if (res) {
                            login = {
                                valid: true
                            };
                            socket.emit("loginevent", login);
                        } else {
                            login = false;
                            socket.emit("loginevent", login);
                        }
                    });
                } else {
                    login = false;
                    socket.emit("loginevent", login);
                }
               
            });
        });
    });
    
    socket.on('usercheck', function (data) {
        var username = data.username,
            valid;
        db.serialize(function () {
            db.all("SELECT * FROM USERS WHERE user = ? LIMIT 1", username, function (err, rows) {
                if (rows[0]) {
                    valid = { valid: false };
                } else {
                    valid = { valid: true };
                }
                socket.emit("userChecked", valid);
            });
        });
    });
});





