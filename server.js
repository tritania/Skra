var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    sqlite3 = require('sqlite3').verbose(),
    port = 4567;
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

app.listen(port);

function createTable() {
    "use strict";
    db.run("CREATE TABLE test (info TEXT)");
}