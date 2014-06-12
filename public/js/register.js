/*jslint browser: true*/
/*global d3, console,io*/
var socket = io.connect("127.0.0.1:4567");

function signup() {
    "use strict";
    d3.select(".registerdiv").style("visibility", "visible");
    d3.select(".prc").attr("id", "registercover");
}

function closereg() {
    "use strict";
    d3.select(".registerdiv").style("visibility", "hidden");
    d3.select(".prc").attr("id", "nonactive");
}

function register() {
    "use strict";
    var pass     = document.getElementById("pass").value,
        user     = document.getElementById("user").value,
	    confpass = document.getElementById("confpass").value,
	    email    = document.getElementById("email").value,
	    name     = document.getElementById("name").value,
	    weight   = document.getElementById("weight").value,
	    height   = document.getElementById("height").value,
	    age      = document.getElementById("age").value,
        registerdata;
    console.log(user);
    
    registerdata = {
        username: user,
        password: pass,
        email: email,
        name: name,
        weight: weight,
        height: height,
        age: age
    };
    
    socket.emit("register", registerdata);
    closereg();
}