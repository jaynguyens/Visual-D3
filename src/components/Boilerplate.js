import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Transition = () => {
  const visualRef = useRef();

  useEffect(() => {
    // eslint-disable-next-line
    const svg = d3.select(visualRef.current);
  }, []);

  return (
    <svg ref={visualRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default Transition;
