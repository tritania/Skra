/*jslint node: true*/
/*global io*/
"use strict";
var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    sqlite3 = require('sqlite3').verbose(),
    port = 4567;
var io = require('socket.io').listen(app.listen(port));

var db = new sqlite3.Database('public/data/data.db');
db.run("create table if not exists USERS (userid INTEGER PRIMARY KEY, user TEXT, password TEXT, email TEXT, name TEXT, weight NUMERIC, height NUMERIC, age NUMERIC)");

app.get("/", function (req, res) {
    res.redirect("/index.html");
});

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
            db.each("SELECT * FROM USERS WHERE user = ? LIMIT 1", username, function (err, row) {
                console.log(row.userid);
                if (row.userid) {
                    console.log("assd");
                    valid = { valid: false };
                } else {
                    console.log("asd");
                    valid = { valid: true };
                }
                console.log(valid);
                io.sockets.socket(socket.id).emit("userChecked", valid);
            });
        });
    });
});