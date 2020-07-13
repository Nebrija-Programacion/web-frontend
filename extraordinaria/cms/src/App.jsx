import React from "react";
import { RecoilRoot } from "recoil";

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { createUploadLink } from "apollo-upload-client";

import { ApolloProvider } from "@apollo/react-hooks";
import styled from "styled-components";

import Header from "./components/Header";
import Body from "./components/Body";

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== "undefined",
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: "http://77.228.91.193:4000/graphql" }),
  });

const App = ({
  Component,
  pageProps,
  apolloCache,
  apolloClient = createApolloClient(apolloCache),
}) => (
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <Main>
        <Header />
        <Body />
      </Main>
    </RecoilRoot>
  </ApolloProvider>
);

const Main = styled.div`
  width: 1010px;
  min-height: 600px;
  height: 100%;
  align-items: center;
  margin: 5px auto;
  border: 1px solid #000000;
`;

export default App;
