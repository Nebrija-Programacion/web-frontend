import React, { useState } from "react";
import CompExample from "./components/CompExample";
import AppContext from "./AppContext";
import "./App.css";

function App() {
  const [lang, setLang] = useState("en");
  const [color, setColor] = useState("blue");

  const store = {
    lang: { get: lang, set: setLang },
    color: { get: color, set: setColor },
  };

  return (
    <AppContext.Provider value={store}>
      <CompExample></CompExample>
    </AppContext.Provider>
  );
}

export default App;
