import React from "react";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/transition">Transition</a>
      </nav>
      <Routes />
    </div>
  );
};

export default App;
