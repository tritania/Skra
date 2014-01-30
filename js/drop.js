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
                }
                
            }
