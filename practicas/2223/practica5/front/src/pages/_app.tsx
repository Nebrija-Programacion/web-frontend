import React from "react";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {" "}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
