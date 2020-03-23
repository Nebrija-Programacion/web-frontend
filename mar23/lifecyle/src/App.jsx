import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    click: true
  };

  render() {
    return (
      <div className="App">
        <Child />
        <button
          value="click"
          onClick={() => {
            this.setState({ click: !this.state.click });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

class Child extends Component {
  state = {
    name: "",
    iteration: 1
  };
  render() {
    alert("Render");
    return <div>Hola Mundo!</div>;
  }

  componentDidUpdate() {
    alert("Component Did Update");

    if (this.state.name !== this.props.name) {
      axios.get(lllll);
    }
  }

  componentDidMount() {
    alert("Component Did Mount");
    axios.get("https://rickandmortyapi.com/api/character/2").then(response => {
      alert(response.data.name);
      this.setState({ name: response.data.name });
    });
    alert("End Component Did Mount");
  }

  componentWillUnmount() {
    alert("Unmount ");
  }
}

export default App;
