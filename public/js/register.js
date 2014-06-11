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
    var user     = document.getElementById("username").value;
	var pass     = document.getElementById("pass").value;
	var confpass = document.getElementById("confpass").value;
	var email    = document.getElementById("email").value;
	var name     = document.getElementById("name").value;
	var weight   = document.getElementById("weight").value;
	var height   = document.getElementById("height").value;
	var age      = document.getElementById("age").value;
    createTable();
}