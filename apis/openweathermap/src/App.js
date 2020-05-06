import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apikey, setApikey] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (apikey) {
      const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=${apikey}`;
      console.log(endpoint);
      axios
        .get(endpoint)
        .then((response) => {
          setError(null);
          setWeather(response.data);
        })
        .catch((_error) => {
          console.log(_error.response);
          setError(_error.response.status);
        });
    }
    return () => {};
  }, [apikey]);
  const onAuthenticate = (token) => {
    setApikey(token);
  };

  if (!apikey) {
    return (
      <div className="App">
        <input id="apikey" placeholder="OpenWeather API Key" />
        <button
          onClick={() => {
            setError(null);
            onAuthenticate(document.getElementById("apikey").value);
          }}
        >
          Authenticate
        </button>
      </div>
    );
  } else if (error === 401) {
    return (
      <div className="App">
        Invalid token <button onClick={() => setApikey(null)}>Retry</button>
      </div>
    );
  } else {
    if (!weather) return <div className="App">loading...</div>;
    else {
      console.log(weather);
      return (
        <div className="App">
          <ul>
            {Object.keys(weather.current).map((key) =>
              Number.isInteger(weather.current[key]) ? (
                <li key={key}>
                  {" "}
                  {key} - {weather.current[key]}
                </li>
              ) : null
            )}
          </ul>
        </div>
      );
    }
  }
}

export default App;
