function drop(x)
            {
                var In = "#drop";
                var Id = In.concat(x);
                var j = d3.select(Id).style("height");
                var dur = 375;
                d3.selectAll(".buttontextcon").transition().duration(0).style("border-bottom-right-radius", "15px 15px");
                d3.selectAll(".buttonimg").transition().duration(0).style("border-bottom-left-radius", "15px 15px");
                switch(x)
                {
                    case 1:
                        d3.select("#drop2").transition().duration(dur).style("height", "0px");
                        d3.select("#drop3").transition().duration(dur).style("height", "0px");
                        d3.select("#drop4").transition().duration(dur).style("height", "0px");
                        d3.select("#drop5").transition().duration(dur).style("height", "0px");
                        break;
                    case 2:
                        d3.select("#drop1").transition().duration(dur).style("height", "0px");
                        d3.select("#drop3").transition().duration(dur).style("height", "0px");
                        d3.select("#drop4").transition().duration(dur).style("height", "0px");
                        d3.select("#drop5").transition().duration(dur).style("height", "0px");
                        break;
                    case 3:
                        d3.select("#drop1").transition().duration(dur).style("height", "0px");
                        d3.select("#drop2").transition().duration(dur).style("height", "0px");
                        d3.select("#drop4").transition().duration(dur).style("height", "0px");
                        d3.select("#drop5").transition().duration(dur).style("height", "0px");
                        break;
                    case 4:
                        d3.select("#drop1").transition().duration(dur).style("height", "0px");
                        d3.select("#drop2").transition().duration(dur).style("height", "0px");
                        d3.select("#drop3").transition().duration(dur).style("height", "0px");
                        d3.select("#drop5").transition().duration(dur).style("height", "0px");
                        break;
                    case 5:
                        d3.select("#drop1").transition().duration(dur).style("height", "0px");
                        d3.select("#drop2").transition().duration(dur).style("height", "0px");
                        d3.select("#drop3").transition().duration(dur).style("height", "0px");
                        d3.select("#drop4").transition().duration(dur).style("height", "0px");
                        break;
                }

                
               
                if (j == "300px")
                {
                    d3.select(Id).transition().duration(dur)
                        .style("height", "0px");
                    d3.selectAll(".buttontextcon").transition().duration(900).style("border-bottom-right-radius", "15px 15px");
                    d3.selectAll(".buttonimgcon").transition().duration(900).style("border-bottom-left-radius", "15px 15px");
                    d3.select(Id).transition().delay(dur).style("border","0px solid");
                }
                else 
                {
                    d3.selectAll(".dropper").style("border", "0px solid");
                    d3.select(Id)
                        .transition()
                        .duration(dur)
                        .style("height","300px")
                        .style("background-color","#D1D1D1")
                        .style("border","1px solid");
                    var cornerId = "#t".concat(x);
                    var cornerId2 = "#i".concat(x);
                    d3.select(cornerId).transition().duration(dur).style("border-bottom-right-radius", "0px 0px");
                    d3.select(cornerId2).transition().duration(dur).style("border-bottom-left-radius", "0px 0px");
                }
                
            }
