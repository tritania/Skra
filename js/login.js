function login()
{
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
	  xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("logbtn").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/login.php?username="+user+"&password="+pass,true);
	xmlhttp.send();
    
    d3.select(".logincover").transition().duration(600).style("height","0px");
}
