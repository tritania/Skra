var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    sqlite3 = require('sqlite3').verbose(),
    port = 4567;
var io = require('socket.io').listen(app.listen(port));

var db = new sqlite3.Database('public/data/data.db');
db.run("create table if not exists USERS (user TEXT, password TEXT, email TEXT, name TEXT, weight NUMERIC, height NUMERIC, age NUMERIC)")

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

io.sockets.on('connection', function(socket) {
    socket.on('register', function(data) {
        var username = data.username;
        var password = data.password;
        var email = data.email;
        var name = data.name;
        var weight = data.weight;
        var height = data.height;
        var age = data.age;
        
        db.serialize(function() {
            var stmt = db.prepare("INSERT INTO USERS VALUES (?, ?, ?, ?, ?, ?, ?)");
            stmt.run(username, password, email, name, weight, height, age);
            stmt.finalize();
        });
    });
    socket.on('login', function(data) {
       
    });
});