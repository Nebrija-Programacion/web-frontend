import React, { useState } from "react";
import "./App.css";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Character from "./components/Character";

const httpLink = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

function App() {
  const [name, setName] = useState(null);

  const onSearch = (name) => {
    setName(name);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <input id="name" placeholder="Nombre" />
        <button onClick={() => onSearch(document.getElementById("name").value)}>
          Buscar
        </button>
        {name !== null ? <Character name={name} /> : null}
      </div>
    </ApolloProvider>
  );
}

export default App;
