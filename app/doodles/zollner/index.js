import d3 from 'd3';



function zollner (drawing, width=500, height=500) {
  var svgContainer = d3.select("." + drawing);
  svgContainer.attr("width", width).attr("height", height);
  let space = 15;

  let drawHorizon = function(start = 0) {
    let firstColor = "black";
    let secondColor = "white";
    let x_current_pos = start;

    while (x_current_pos <= width) {
      let rect = svgContainer.append("rect")
        .attr("x", x_current_pos)
        .attr("y", y_current_pos)
        .attr("height", space)
        .attr("width", space);
      if (x_current_pos % 2 === 0 ){
        rect.attr("fill", firstColor);
      } else {
        rect.attr("fill", secondColor);
      }
      x_current_pos = x_current_pos + space;
    }

  }

  let y_current_pos = 0;
  let counter = 0
  while (y_current_pos <= height) {
    if (counter % 5 === 0) {
      drawHorizon(0);
    } else if (counter % 5 === 1){
      drawHorizon(2);
    } else if (counter % 5 === 2) {
      drawHorizon(6);
    } else if (counter % 5 === 3) {
      drawHorizon(0);
      counter = 0;
    }
    counter = counter + 1;


    svgContainer.append("line")
      .attr("x1", 0).attr("y1", y_current_pos + space)
      .attr("x2", 500).attr("y2", y_current_pos + space)
      .attr("stroke", "gray").attr("stroke-width", "1");
    y_current_pos = y_current_pos + space;
  }
}

module.exports = zollner;
