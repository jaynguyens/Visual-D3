// Updates, Transitions, and Motion

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const Chapter9 = () => {
  const visual = useRef(null);
  const xaxis = useRef(null);
  const yaxis = useRef(null);

  let dataset = [
    5,
    10,
    13,
    19,
    21,
    25,
    22,
    18,
    15,
    13,
    11,
    12,
    15,
    20,
    18,
    17,
    16,
    18,
    23,
    25
  ];

  useEffect(() => {
    const width = 600;
    const height = 250;

    // define scales

    const xScale = d3
      .scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([20, width - 20])
      .paddingInner(0.05);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - 2, 20]);

    // create an initial svg element
    const svg = d3
      .select(visual.current)
      .attr("width", width)
      .attr("height", height);

    // create axis ---

    const xAxis = d3.axisBottom(xScale).ticks(dataset.length);

    svg
      .select(".x-axis")
      .style("transform", `translateY(250px)`)
      .call(xAxis);

    // create bars

    svg
      .selectAll("rect")
      .data(dataset)
      .join("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => height - yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(d));

    // updating the graph via event listeners
    d3.select(".button").on("click", () => {
      var numValues = dataset.length;
      dataset = [];
      for (var i = 0; i < numValues; i++) {
        var newNumber = Math.floor(Math.random() * 25);
        dataset.push(newNumber);
      }

      svg
        .selectAll("rect")
        .data(dataset)
        .transition()
        .delay((d, i) => (i / dataset.length) * 500)
        .duration(1000)
        .attr("y", d => height - yScale(d))
        .attr("height", d => yScale(d));
    });
  }, []);

  return (
    <>
      <svg ref={visual}>
        <g ref={xaxis} className="x-axis" />
        <g ref={yaxis} className="y-axis" />
      </svg>
      <button className="button">Update</button>
    </>
  );
};

export default Chapter9;
