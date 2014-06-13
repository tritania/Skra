/*jslint browser: true*/
/*global d3, console,io*/
var socket = io.connect("skra.org:443");
var valid = [1];

function invalidUser(data) {
    "use strict";
    var state = data.valid;
    console.log(valid.length);
    if (state) {
        d3.select("#user").style("background-color", "rgba(45, 191, 44, 0.70)");
        valid[0] = true;
    } else {
        d3.select("#user").style("background-color", "rgba(255, 0, 0, 0.70)");
    }
}

socket.on("userChecked", function (data) {
    "use strict";
    invalidUser(data);
});

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

function checkUser() {
    "use strict";
    var username = document.getElementById("user").value,
        check = {
            username: username
        };
    if (username !== "") {
        socket.emit("usercheck", check);
    }
}

function checkPassword() {
    "use strict";
    var pass     = document.getElementById("pass").value,
        confpass = document.getElementById("confpass").value;
    if (pass !== "") {
        if (pass === confpass) {
            d3.select("#pass").style("background-color", "rgba(45, 191, 44, 0.70)");
            d3.select("#confpass").style("background-color", "rgba(45, 191, 44, 0.70)");
            valid[1] = true;
        } else {
            d3.select("#pass").style("background-color", "rgba(255, 0, 0, 0.70)");
            d3.select("#confpass").style("background-color", "rgba(255, 0, 0, 0.70)");
        }
    }
}

function checkEmail() {
    "use strict";
    var email = document.getElementById("email").value,
        atpos = email.indexOf("@"),
        dotpos = email.lastIndexOf(".");
    if (email !== "") {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            d3.select("#email").style("background-color", "rgba(255, 0, 0, 0.70)");
        } else {
            d3.select("#email").style("background-color", "rgba(45, 191, 44, 0.70)");
        }
    }
}