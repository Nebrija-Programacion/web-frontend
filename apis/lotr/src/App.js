import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (token) {
      const endpoint = "https://the-one-api.herokuapp.com/v1/movie";

      axios
        .get(endpoint, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log(response);
          setMovies(response.data.docs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {};
  }, [token]);
  const onAuthenticate = (token) => {
    setToken(token);
  };

  if (!token)
    return (
      <div>
        <input id="token" placeholder="github token" />
        <button
          onClick={() => onAuthenticate(document.getElementById("token").value)}
        >
          Authenticate
        </button>
      </div>
    );
  else {
    if (movies.length === 0) return <div>loading...</div>;
    else
      return (
        <div>
          <ul>
            {movies.map((movie) => (
              <li>{movie.name}</li>
            ))}
          </ul>
        </div>
      );
  }
}

export default App;
