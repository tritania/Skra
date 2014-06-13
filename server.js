/*jslint node: true*/
/*global io*/
"use strict";
var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    https = require('https'),
    fs = require('fs'),
    http = require('http'),
    sqlite3 = require('sqlite3').verbose(),
    port = 443,
    
    options = {
        ca: fs.readFileSync('keys/skra.ca-bundle').toString(),
        key: fs.readFileSync('keys/skra.key').toString(),
        cert: fs.readFileSync('keys/skra_org.crt').toString()
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

io.sockets.on('connection', function (socket) {
    
    socket.on('register', function (data) {
        var username = data.username,
            password = data.password,
            email = data.email,
            name = data.name,
            weight = data.weight,
            height = data.height,
            age = data.age;
        
        db.serialize(function () {
            var stmt = db.prepare("INSERT INTO USERS (user, password, email, name, weight, height, age) VALUES (?,?,?,?,?,?,?)");
            stmt.run(username, password, email, name, weight, height, age);
            stmt.finalize();
        });
        db.close();
    });
    
    socket.on('login', function (data) {
       
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