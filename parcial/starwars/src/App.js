import React, { Component } from "react";

import Films from "./components/Films";
import Detail from "./components/Detail";
import "./components/style.css";
import data from "./assets/data.json";
import Logo from "./assets/Star_Wars_Logo.svg";

class App extends Component {
  state = {
    detail: false
  };

  detail = {};

  closeHandler = () => {
    console.log("close");
    this.setState({ detail: false });
  };

  selectFilm = id => {
    console.log(`select ${id}`);
    this.detail = data.find(film => film.episode_id === id);
    this.setState({ detail: true });
  };
  render() {
    return (
      <div className="App">
        <Films data={data} onSelect={this.selectFilm} />
        {this.state.detail ? (
          <Detail closeHandler={this.closeHandler} detail={this.detail} />
        ) : null}
      </div>
    );
  }
}

export default App;
