import React from "react";
import { CookiesProvider } from "react-cookie";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const App = () => {
  useEffect(() => {
    return () => {
      cleanup;
    };
  }, [input]);
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
