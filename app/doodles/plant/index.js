import React from 'react';
import d3 from 'd3';

function plant (drawing, width=500, height=500) {
  let svgContainer = d3.select("." + drawing)
    .attr("width", width)
    .attr("height", height);
  let start_pos_y = height;
  let start_pos_x = width / 3;

  let stemData = [ { "x": start_pos_x,   "y": start_pos_y}, {"x": start_pos_x,  "y" : start_pos_y - 400}];
  let leafData_left = [ {"x": start_pos_x, "y" : start_pos_y - 150}, {"x": start_pos_x - 10, "y" : start_pos_y - 155}]
  let leafData_right = [ {"x": start_pos_x, "y" : start_pos_y - 100}, {"x": start_pos_x + 10, "y" : start_pos_y - 105}]

  var lineFunction  =
    d3.svg.line()
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; })
      .interpolate("linear");

  //stem
  svgContainer.append("path").attr("d", lineFunction(stemData))
      .attr("stroke", "green")
      .attr("stroke-width", 4)
      .attr("fill", "none");
  //left leaf
  svgContainer.append("path").attr("d", lineFunction(leafData_left))
    .attr("stroke", "green")
    .attr("stroke-width", 4)
    .attr("fill", "none");

  //right leaf
  svgContainer.append("path").attr("d", lineFunction(leafData_right))
    .attr("stroke", "green")
    .attr("stroke-width", 4)
    .attr("fill", "none");

  var drawFlower  = () => {

  }

  //drawStem();
  //drawLeaves();

}

module.exports = plant;
