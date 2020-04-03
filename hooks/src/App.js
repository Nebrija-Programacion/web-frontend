import React, { useState } from "react";
import Age from "./components/Age";

function App() {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(40);

  const ageHandler = value => {
    setAge(value);
  };

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {age < 50 ? <Age ageHandler={ageHandler}></Age> : null}
    </div>
  );
}

export default App;
