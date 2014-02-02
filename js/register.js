function register()
{
	d3.select(".registerdrop").style("visibility", "visible");
}

function registerclose()
{
	d3.select(".registerdrop").style("visibility", "hidden");
}

function registeruser()
{
	var user     = document.getElementById("R1").value;
	var pass     = document.getElementById("R2").value;
	var confpass = document.getElementById("R3").value;
	var email    = document.getElementById("R4").value;
	var name     = document.getElementById("R5").value;
	var weight   = document.getElementById("R6").value;
	var height   = document.getElementById("R7").value;
	var age      = document.getElementById("R8").value;
	var newuser;
	
	
	var xmlhttp;
		if (window.XMLHttpRequest) {
		 xmlhttp=new XMLHttpRequest(); }
		xmlhttp.onreadystatechange=function()
		{
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		  {
			  document.getElementById("#tester3").innerHTML=xmlhttp.responseText;
		  }
		}
		xmlhttp.open("GET","php/registercheck.php?username="+user,true);
		xmlhttp.send();
		

	if (pass != confpass)
		error("enter matching password again")
	else if (user | pass | confpass | email | name | weight | height | age == "")
	{
		error("fill all of the forms please!")
	}
	else if(newuser = 1)
	{ 
		//inser into databse

	d3.select(".registerdrop").style("visibility", "hidden");
	d3.select(".logincover").transition().duration(600).style("height","0px");
	clearlogin();
	}
	else 
	{
		error("enter a new password");
	}
}

function error(errormessage)
{
	d3.select(".alertmsg").html("Please " + errormessage  + "");
	d3.select(".alertmsg").style("color","red");
	
}
