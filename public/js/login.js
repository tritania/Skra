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
        document.getElementById("username").value  = "";
        document.getElementById("password").value  = "";
        d3.select("#ilogin")
            .style("visibility", "visible")
            .style("opacity", 1);
        d3.select("#ilogin")
            .transition()
            .duration(2500)
            .style("opacity", 0)
            .style("visibilty", "hidden");
        
    }
});