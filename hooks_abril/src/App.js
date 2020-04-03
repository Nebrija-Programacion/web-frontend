import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [overflow, setOverflow] = useState(10);

  return (
    <div className="App">
      <Counter overflow={overflow} timeout={1000} />
      <Counter overflow={overflow} timeout={500} />
      <input
        id="ov"
        value={overflow}
        onChange={() => setOverflow(document.getElementById("ov").value)}
      ></input>
    </div>
  );
}

export default App;
