import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DelayElements = () => {
  const Refsvg = useRef();

  useEffect(() => {
    const margin = {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
    };
    const width = 640 - margin.left - margin.right;
    const height = 480 - margin.top - margin.bottom;

    //dataset
    const dataset = [50, 100, 150, 200, 250, 300, 350];

    const svg = d3
      .select(Refsvg.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    svg
      .selectAll(".delaysvg")
      .data(dataset)
      .join("circle")
      .attr("cx", (d) => d)
      .attr("cy", 40)
      .attr("r", 10)
      //animate deplay
      .transition()
      .duration(2000)
      .delay((a, i) => i * 500)
      .attr("cy", 300);

    //animation
  }, []);

  return (
    <svg ref={Refsvg}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default DelayElements;
