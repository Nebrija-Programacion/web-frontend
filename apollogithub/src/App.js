import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  const onAuthenticate = (token) => {
    console.log(token);
    setToken(token);
  };

  if (!token)
    return (
      <div className="App">
        <input id="token" placeholder="github token" />
        <button
          onClick={() => onAuthenticate(document.getElementById("token").value)}
        >
          Authenticate
        </button>
      </div>
    );
  else {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    return (
      <ApolloProvider client={client}>
        <div className="App">{token}</div>
      </ApolloProvider>
    );
  }
}

export default App;
