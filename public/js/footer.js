/*global d3, console*/

function showFooterElement(element) {
    "use strict";
    d3.select(element).style("visibility", "visible");
    d3.select(".prc").attr("id", "registercover");
}

function dismissFooterElement(element) {
    "use strict";
    d3.select(element).style("visibility", "hidden");
    d3.select(".prc").attr("id", "nonactive");
}