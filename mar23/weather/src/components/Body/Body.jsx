import React, { Component } from "react";
import "./Body.css";
import Search from "../Search/Search";
import Selected from "../Selected/Selected";

class Body extends Component {
  state = {
    selected: null
  };

  onSelectHandler = result => {
    console.log(result);
    this.setState({ selected: result });
  };

  render() {
    return (
      <div className="Body">
        <Search onSelectHandler={this.onSelectHandler} />
        {this.state.selected ? <Selected data={this.state.selected} /> : null}
      </div>
    );
  }
}

export { Body as default };
