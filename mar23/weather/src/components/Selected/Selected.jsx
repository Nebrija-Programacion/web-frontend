import React, { Component } from "react";
import "./Selected.css";
import keys from "../../config.json";
import axios from "axios";

class Selected extends Component {
  state = {
    data: null,
    weather: null
  };

  render() {
    console.log("render");
    if (
      !this.state.weather ||
      this.state.data.place_id !== this.props.data.place_id
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Selected">
        <div className="City">{this.state.data.formatted_addres}</div>
        <div className="Details">{this.state.weather.currently.summary}</div>
        <div className="Details">
          Temp:{" "}
          {Math.round(
            ((this.state.weather.currently.temperature - 32) * 5) / 9
          )}
          ºC
        </div>
        <div className="Details">
          Lluvia:{" "}
          {Math.round(this.state.weather.currently.precipProbability * 100)}%
        </div>
      </div>
    );
  }

  getWeather = () => {
    const url = `${keys.darksky.proxy}${keys.darksky.url}${keys.darksky.api_key}/${this.props.data.location.lat},${this.props.data.location.lng}?lang=es`;
    axios.get(url).then(response => {
      this.setState({
        data: this.props.data,
        weather: response.data
      });
    });
  };

  componentDidUpdate() {
    if (
      !this.state.data ||
      this.state.data.place_id !== this.props.data.place_id
    ) {
      this.getWeather();
    }
  }

  componentDidMount() {
    this.getWeather();
  }
}

export { Selected as default };
