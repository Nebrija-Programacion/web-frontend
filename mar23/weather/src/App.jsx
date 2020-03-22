import React, { Component } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
