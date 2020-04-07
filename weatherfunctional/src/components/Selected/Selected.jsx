import React, { useState, useEffect } from "react";
import "./Selected.css";
import keys from "../../config.json";
import axios from "axios";

const Selected = (props) => {
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    const url = `${keys.darksky.proxy}${keys.darksky.url}${keys.darksky.api_key}/${props.data.location.lat},${props.data.location.lng}?lang=es`;
    axios.get(url).then((response) => {
      setData(props.data);
      setWeather(response.data);
    });
  };

  useEffect(() => {
    getWeather();
    return () => {};
  }, [props.data]);

  if (!weather || data.place_id !== props.data.place_id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Selected">
      <div className="City">{data.formatted_addres}</div>
      <div className="Details">{weather.currently.summary}</div>
      <div className="Details">
        Temp: {Math.round(((weather.currently.temperature - 32) * 5) / 9)}
        ºC
      </div>
      <div className="Details">
        Lluvia: {Math.round(weather.currently.precipProbability * 100)}%
      </div>
    </div>
  );
};

export { Selected as default };
