import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AxisTransition = () => {
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

    const svg = d3
      .select(visualRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const scaleX = d3
      .scaleLinear()
      .domain([0, 100])
      .range([margin.left, width - margin.right]);

    //final state of scaleX

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(scaleX));

    svg
      .select(".x-axis")
      .call(xAxis)
      //animation axis
      .transition()
      .duration(3000)
      .call(d3.axisBottom(scaleX.domain([0, 500])));

    // -----

    const scaleY = d3
      .scaleLinear()
      .domain([0, 10])
      .range([height - margin.bottom, margin.top]);

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(scaleY));

    svg.select(".y-axis").call(yAxis);

    // a new function
    svg
      .select(".y-axis")
      .transition()
      .duration(3000)
      .delay(2000)
      .call(d3.axisLeft(scaleY.domain([0, 40])));
  }, []);

  return (
    <svg ref={visualRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default AxisTransition;
