var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    sqlite3 = require('sqlite3').verbose(),
    port = 4567;
var io = require('socket.io').listen(app.listen(port));

var db = new sqlite3.Database('public/data/data.db');

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
       console.log("data recieved"); 
    });
});



