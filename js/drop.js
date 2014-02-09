function drop(x)
            {
                var In = "#drop";
                var Id = In.concat(x);
                var j = d3.select(Id).style("height");
                var dur = 375;
                d3.selectAll(".buttontextcon").style("border-bottom-right-radius", "15px 15px");
                d3.selectAll(".buttonimg").style("border-bottom-left-radius", "15px 15px");
                d3.selectAll(".dropper")
                    .style("box-shadow", "0px 0px 0px #888888")
                    .transition().duration(dur).style("height", "0px");
                
               
                if (j == "300px")
                {
					d3.selectAll(".destroyme").remove();
                    d3.select(Id).transition().duration(dur)
                        .style("height", "0px");
                    d3.selectAll(".buttontextcon").transition().duration(900).style("border-bottom-right-radius", "15px 15px");
                    d3.selectAll(".buttonimgcon").transition().duration(900).style("border-bottom-left-radius", "15px 15px");
                    d3.select(Id).transition().delay(dur).style("border","0px solid");
                    d3.selectAll(".dropper").style("box-shadow", "0px 0px 0px #888888");
                }
                else 
                {
                    d3.selectAll(".dropper").style("border", "0px solid");
                    d3.select(Id)
                        .transition()
                        .duration(dur)
                        .style("border","1px solid")
                        .style("box-shadow", "10px 10px 5px #888888")
                        .style("height","300px");
                    var cornerId = "#t".concat(x);
                    var cornerId2 = "#i".concat(x);
                    d3.select(cornerId).transition().duration(dur).style("border-bottom-right-radius", "0px 0px");
                    d3.select(cornerId2).transition().duration(dur).style("border-bottom-left-radius", "0px 0px");
                    d3.selectAll(".destroyme").remove();
                    addelem(Id);
                }
                
            }
function addelem(ele)
{ //needs to be a switch
	var j = d3.select(ele).style("height");
	if (j == "300px")
	{}
	else 
	{
		switch(ele)
		{
			case "#drop1":
			{
				d3.select(ele).append("p").text("Please add a bloodsugar value below")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input").text("Blood glucose value")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("p").text("What time did you take it (blank for now)")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input").attr("type","datetime-local")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(1)");
				break;
			}
			case "#drop2":
			{
				d3.select(ele).append("p").text("Please enter the amount of carbs below")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input").text("Carbs:")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("p").text("Amount of insulin taken")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input").text("Carbs:")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("p").text("What time did eat (blank for now)")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input").attr("type","datetime-local")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(2)");
				break;
			}
			case "#drop3":
			{
				d3.select(ele).append("p").text("amount of insulin for 20g of carbs")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(3)");
				break;
			}
			case "#drop4":
			{
				d3.select(ele).append("p").text("amount of time you exercised")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("p").text("Type of exercise")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("select")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto")
					.attr("class","destroyme");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(4)");
				break;
			}
			case "#drop5":
			{
				d3.select(ele).append("p").text("amount of insulin taken")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("input")
					.attr("class","destroyme")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto");
				d3.select(ele).append("p").text("Select an injection site")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("select")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto")
					.attr("class","destroyme");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(5)");
				break;
			}
			case "#drop6":
			{
				d3.select(ele).append("p").text("What graph do you want to see?")
					.attr("class","destroyme")
					.style("text-align","center");
				d3.select(ele).append("select")
					.style("width","60%")
					.style("margin-left","auto")
					.style("margin-right","auto")
					.attr("class","destroyme");
				d3.select(ele).append("br");
				d3.select(ele).append("br");
				d3.select(ele).append("div").text("Submit")
					.attr("class","destroyme")
					.attr("id","dropbutton")
					.attr("onclick","utility(6)");
				break;
			}
		}
	}
}
