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
	
	if (pass != confpass)
		alert("enter matching password again")
	else if (user | email | name | weight | height | age == "")
	{
		alert("fill all of the forms please!")
	}
	else 
	{ 
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
		  xmlhttp=new XMLHttpRequest();
		}
		xmlhttp.onreadystatechange=function()
		{
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		  {
				var newuser=xmlhttp.responseText;
				if (newuser == "0")
				{
					alert("pick a new user name");
				}
				else 
				{
					var xxmlhttp;
					if (window.XMLHttpRequest)
					{
					  xxmlhttp=new XMLHttpRequest();
					}
					xxmlhttp.onreadystatechange=function()
					{
					  if (xxmlhttp.readyState==4 && xxmlhttp.status==200)
					  {
						document.getElementById("logbtn").innerHTML=xxmlhttp.responseText;
					  }
					}
					xxmlhttp.open("GET","php/register.php?username="+user+"&password="+pass+"&email="+email+"&name="+name+"&weight="+weight+"&height="+weight+"&age="+age,true);
					xxmlhttp.send();
										//insert data here
				}
		   }
		}
		xmlhttp.open("GET","php/registercheck.php?username="+user,true);
		xmlhttp.send();
	
	//database calls here
	d3.select(".registerdrop").style("visibility", "visible");
	d3.select(".logincover").transition().duration(600).style("height","0px");
	}
}

function alert(errormessage)
{
	d3.select(".alertmsg").html("Please " + errormessage  + "");
	d3.select(".alertmsg").style("color","red");
	
}
