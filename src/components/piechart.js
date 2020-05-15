import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Piechart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", 500)
      .attr("height", 500);

    // calculate the path for each data point
    const pie = d3.pie().value(d => d.value)(data);

    // plot the pie chart
    svg
      .selectAll(".pie")
      .data(pie)
      .join("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(100)
      )
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .attr("transform", "translate(200, 200)");
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Piechart;
