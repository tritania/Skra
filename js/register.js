function register()
{
	d3.select(".registerdrop").style("visibility", "visible");
}

function registerclose()
{
	d3.select(".registerdrop").style("visibility", "hidden");
}

function registerusre()
{
	var user     = document.getElementById("R1").value;
	var pass     = document.getElementById("R2").value;
	var confpass = document.getElementById("R3").value;
	var email    = document.getElementById("R4").value;
	var name     = document.getElementById("R5").value;
	var bmi      = document.getElementById("R6").value;
	
	//database calls here
	d3.select(".registerdrop").style("visibility", "visible");
	d3.select(".logincover").transition().duration(600).style("height","0px");
}
