/*jslint browser: true*/
/*jslint plusplus: true */
/*global d3, console,io*/
var socket = io.connect("skra.org:443");
var valid = new Array(7);

function validate(id, value) {
    "use strict";
    valid[id] = value;
}

function isReady() {
    "use strict";
    var i = 0;
    for (i; i < valid.length; i++) {
        if (valid[i] !== true) {
            return false;
        }
    }
    return true;
}

socket.on("userChecked", function (data) {
    "use strict";
    var state = data.valid;
    if (state) {
        d3.select("#user").style("background-color", "rgba(45, 191, 44, 0.70)");
        validate(0, true);
    } else {
        d3.select("#user").style("background-color", "rgba(255, 0, 0, 0.70)");
        validate(0, false);
    }
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
    if (isReady()) {
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
            confpass: confpass,
            email: email,
            name: name,
            weight: weight,
            height: height,
            age: age
        };
    
        socket.emit("register", registerdata);
        closereg();
    } else {
        d3.select(".temp").remove();
        d3.select("#regdes").insert("p").text("Please fill out all input boxes before hitting submit!")
            .style("color", "red")
            .attr("class", "temp");
    }
    
}

function checkUser() {
    "use strict";
    var username = document.getElementById("user").value,
        check = {
            username: username
        };
    if (username !== "") {
        socket.emit("usercheck", check);
    } else {
        d3.select("#user").style("background-color", "white");
        validate(0, false);
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
            validate(1, true);
        } else {
            d3.select("#pass").style("background-color", "rgba(255, 0, 0, 0.70)");
            d3.select("#confpass").style("background-color", "rgba(255, 0, 0, 0.70)");
            validate(1, false);
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
            validate(2, false);
        } else {
            d3.select("#email").style("background-color", "rgba(45, 191, 44, 0.70)");
            validate(2, true);
        }
    } else {
        d3.select("#email").style("background-color", "white");
        if (valid > 0) {
            validate(2, false);
        }
    }
}

function checkName() {
    "use strict";
    var name = document.getElementById("name").value;
    if (name !== "") {
        if (name.length > 1) {
            d3.select("#name").style("background-color", "rgba(45, 191, 44, 0.70)");
            validate(3, true);
        } else {
            d3.select("#name").style("background-color", "rgba(255, 0, 0, 0.70)");
            if (valid > 0) {
                validate(3, false);
            }
        }
    } else {
        d3.select("#name").style("background-color", "white");
        if (valid > 0) {
            validate(3, false);
        }
    }
}

function checkNumeric(id, vid) {
    "use strict";
    var value = document.getElementById(id).value,
        check = value.split(''),
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
        if (isValid) {
            d3.select("#" + id).style("background-color", "rgba(45, 191, 44, 0.70)");
            validate(vid, true);
        } else {
            d3.select("#" + id).style("background-color", "rgba(255, 0, 0, 0.70)");
            validate(vid, false);
        }
    } else {
        d3.select("#" + id).style("background-color", "white");
        if (valid > 0) {
            validate(vid, false);
        }
    }
}