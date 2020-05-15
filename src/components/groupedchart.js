import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

/**
 * TODO:
 * - refactor code
 * - add mouse hover display the number
 * - add animation when first open
 */

const Groupedchart = ({ data }) => {
  // data is an array of objects
  // each object contains the state name and group ages
  // [{state: 'CA', '<5': number, '5-13': number, ... }]

  const svgRef = useRef();

  useEffect(() => {
    // ----- margin convention
    const margin = {
      top: 30,
      right: 20,
      bottom: 0,
      left: 60
    };
    const width = 640 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    // ------ declear svg element to work with
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // define some variables
    const ageGroups = data.columns.slice(1); //keys
    const States = data.map(d => d.State);

    // TODO: calculate the max population of age groups
    // console.log(d3.max(data, d => d3.max(ageGroups, key => d[key])));
    const maxPopulation = 10604510;

    /** TODO: X axis
     *
     * contains states and each state contains age groups
     * ---[ ]---[ ]---[ ]---[ ]
     *    CA    TX    FL    NY
     *
     **/

    const xScaleStates = d3
      .scaleBand()
      .domain(States) //TODO: why eachState take into array of States
      .range([margin.left, width - margin.right])
      .paddingInner(0.1);

    const xAxis = g =>
      g
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScaleStates));

    /** TODO: Y axis
     *
     *  domain from 0 to max population
     *  plotted on height - margin to margin top
     *
     */

    const yScale = d3
      .scaleLinear()
      .domain([0, maxPopulation])
      .range([height - margin.bottom, margin.top]);

    const yAxis = g =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));

    /**
     * plot the x and y axes
     */

    svg.select(".x-axis").call(xAxis);
    svg.select(".y-axis").call(yAxis);

    /** TODO: plot rect charts
     *
     *
     */

    const xScaleAgeGroups = d3
      .scaleBand()
      .domain(ageGroups)
      .rangeRound([0, xScaleStates.bandwidth()])
      .padding(0.05);

    /**
     * for each dataset, make a group and translate to its position
     */

    const plotStates = svg
      .selectAll(".agegroup")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${xScaleStates(d.State)},0)`);

    /**
     *
     */

    const color = d3
      .scaleOrdinal()
      .range([
        "#98abc5",
        "#8a89a6",
        "#7b6888",
        "#6b486b",
        "#a05d56",
        "#d0743c",
        "#ff8c00"
      ]);

    const plotAgeGroups = plotStates
      .selectAll("rect")
      .data(d =>
        // convert an object {"": ""}
        // to an array of objects [{age: '', value: number}]
        ageGroups.map(age => ({ age: age, value: d[age] }))
      )
      .join("rect")
      .attr("x", d => xScaleAgeGroups(d.age))
      .attr("y", d => yScale(d.value))
      .attr("width", xScaleAgeGroups.bandwidth())
      .attr("height", d => yScale(0) - yScale(d.value))
      .attr("fill", d => color(d.age));
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  );
};

export default Groupedchart;
