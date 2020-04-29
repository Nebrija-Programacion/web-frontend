import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const endpoint = "https://rickandmortyapi.com/api/character/";
  const [characters, setCharacters] = useState([]);
  let error;
  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
    return () => {};
  });
  if (characters.length === 0) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div>Error!!</div>;
  }

  return (
    <div>
      <ul>
        {characters.map((char) => (
          <li>{char.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
