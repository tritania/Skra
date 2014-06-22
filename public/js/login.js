/*jslint browser: true*/
/*jslint plusplus: true */
/*global d3, console,io*/
var socket = io.connect("skra.org:443");

function login() {
    "use strict";
    var pass     = document.getElementById("password").value,
        user     = document.getElementById("username").value,
        logindata = {
            username: user,
            password: pass
        };
    
    
    socket.emit("login", logindata);
    
}

socket.on("loginevent", function (data) {
    "use strict";
    if (data) {
        //logged in
    } else {
        d3.select("#ilogin").style("visibility", "visible");
        d3.select("#ilogin").transition()
            .duration(2500)
            .style("opacity", 0)
            .style("visibilty", "hidden");
    }
});