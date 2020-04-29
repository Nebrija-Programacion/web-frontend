import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const endpoint = "https://swapi.dev/api/planets/";
  const [planets, setPlanets] = useState([]);
  let error;
  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setPlanets(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
    return () => {};
  });
  if (planets.length === 0) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div>Error!!</div>;
  }

  return (
    <div>
      <ul>
        {planets.map((pl) => (
          <li>{pl.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
