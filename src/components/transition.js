import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Transition = () => {
  const visualRef = useRef();

  useEffect(() => {
    const margin = {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
    };
    const width = 640 - margin.left - margin.right;
    const height = 480 - margin.top - margin.bottom;

    // eslint-disable-next-line
    const svg = d3
      .select(visualRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 25)
      .attr("width", 100)
      .attr("height", 30)
      .attr("fill", "#69b3a2")
      .attr("stroke-width", 1)
      //animation step 1 - width
      .transition()
      .duration(2000)
      .attr("width", 400)
      //animation step 2 - height
      .transition()
      .duration(2000)
      .attr("height", 100)
      //animation step 3 -  color
      .transition()
      .duration(1000)
      .style("fill", "red")
      //animation step 4 - change all three
      .transition()
      .duration(3000)
      .attr("height", "50")
      .attr("width", 50);
  }, []);

  return (
    <svg ref={visualRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default Transition;
