import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const randomLetters = () => {
  const letters = d3.shuffle("abcdefghijklmnopqrstuvwxyz".split(""));
  const shuffleletters = letters.slice(0, Math.floor(6 + Math.random() * 20));
  return shuffleletters.sort();
};

const SelectionJoin = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", 500)
      .attr("height", 33)
      .attr("viewBox", `0 -20 500 33`);

    setInterval(() => {
      svg
        .selectAll("text")
        .data(randomLetters(), d => d)
        // .join("text")
        // .attr("x", (d, i) => i * 16)
        // .text(d => d)
        .join(
          enter =>
            enter
              .append("text")
              .attr("fill", "green")

              .attr("x", (d, i) => i * 16)
              .text(d => d)
              .call(enter =>
                enter.transition(svg.transition().duration(750)).attr("y", 0)
              ),
          update =>
            update
              .attr("fill", "black")
              .attr("y", 0)
              .call(update =>
                update
                  .transition(svg.transition().duration(750))
                  .attr("x", (d, i) => i * 16)
              ),
          exit =>
            exit.attr("fill", "brown").call(exit =>
              exit
                .transition(svg.transition().duration(750))
                .attr("y", 30)
                .remove()
            )
        )
        .text(d => d);
    }, 2500);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default SelectionJoin;
