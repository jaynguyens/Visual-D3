import React from "react";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/transition">Transition</a>
        <a href="/delay">Delay</a>
        <a href="/axis">Axis</a>
      </nav>
      <Routes />
    </div>
  );
};

export default App;
