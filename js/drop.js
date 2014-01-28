function drop(x)
            {
                var In = "#drop";
                var Id = In.concat(x);
                var j = d3.select(Id).style("height");
                switch(x)
                {
                    case 1:
                        d3.select("#drop2").transition().duration(750).style("height", "0px");
                        d3.select("#drop3").transition().duration(750).style("height", "0px");
                        d3.select("#drop4").transition().duration(750).style("height", "0px");
                        break;
                    case 2:
                        d3.select("#drop1").transition().duration(750).style("height", "0px");
                        d3.select("#drop3").transition().duration(750).style("height", "0px");
                        d3.select("#drop4").transition().duration(750).style("height", "0px");
                        break;
                    case 3:
                        d3.select("#drop1").transition().duration(750).style("height", "0px");
                        d3.select("#drop2").transition().duration(750).style("height", "0px");
                        d3.select("#drop4").transition().duration(750).style("height", "0px");
                        break;
                    case 4:
                        d3.select("#drop1").transition().duration(750).style("height", "0px");
                        d3.select("#drop2").transition().duration(750).style("height", "0px");
                        d3.select("#drop3").transition().duration(750).style("height", "0px");
                        break;
                }
                
               
                if (j == "120px")
                {
                d3.select(Id).transition().duration(750).style("height", "0px");
                }
                else 
                {
                d3.select(Id)
                    .transition()
                    .duration(750)
                    .style("height","120px")
                    .style("background-color","blue");
                }
            }
