import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (token) {
      const endpoint = "https://the-one-api.herokuapp.com/v1/movie";

      axios
        .get(endpoint, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setError(null);
          setMovies(response.data.docs);
        })
        .catch((_error) => {
          setError(_error.response.status);
        });
    }
    return () => {};
  }, [token]);
  const onAuthenticate = (token) => {
    setToken(token);
  };

  if (!token) {
    return (
      <div className="App">
        <input id="token" placeholder="lotr api token" />
        <button
          onClick={() => {
            setError(null);
            onAuthenticate(document.getElementById("token").value);
          }}
        >
          Authenticate
        </button>
      </div>
    );
  } else if (error === 401) {
    return (
      <div className="App">
        Invalid token <button onClick={() => setToken(null)}>Retry</button>
      </div>
    );
  } else {
    if (movies.length === 0) return <div className="App">loading...</div>;
    else
      return (
        <div className="App">
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
