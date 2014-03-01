function login()
{
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

	
	if(user && pass)
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
			var res=xmlhttp.responseText;
				if (res == 1)
				{
					document.cookie='username';
					clearlogin();
				}
				else 
				{
					alert("Invalid Username or Password");
				}
			}
		}
		xmlhttp.open("GET","php/login.php?username="+user+"&password="+pass,true);
		xmlhttp.send();
	}
	
	else
	{
		alert("Invalid Username or Password");
	}
    
}

function clearlogin()
{
	d3.select(".logincover").transition().duration(600).style("height","0px");
	d3.selectAll(".logtext").remove();
	d3.selectAll(".inputbox").remove();
	d3.selectAll("#logbtn").remove();
	d3.selectAll("#regtext")
		.html("Logout");
	d3.select("#regbtn")
		.attr('onclick', null)
		.attr("onlcick","logout()");
	d3.select(".uppermenu").append("p")
		.style("margin-top","7.5px")
		.style("margin-bottom","7.5px")
		.style("margin-left","10px")
		.text("Welcome to Skra!");

}
