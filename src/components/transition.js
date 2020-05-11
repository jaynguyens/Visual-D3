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
      .attr("x", 10)
      .attr("y", 200)
      .attr("width", 100)
      .attr("height", 30)
      .attr("fill", "#69b3a2")
      .attr("stroke-width", 1)
      //animation
      .transition()
      .duration(2000)
      .attr("width", 400);
  }, []);

  return (
    <svg ref={visualRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default Transition;
