function signup() {
    "use strict";
    d3.select(".registerdiv").style("visibility", "visible");
    d3.select(".prc").attr("id", "registercover");
}

function closereg() {
    "user strict";
    d3.select(".registerdiv").style("visibility", "hidden");
    d3.select(".prc").attr("id", "nonactive");
}