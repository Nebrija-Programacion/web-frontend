import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Albums from './Albums';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Albums 
          artistId="QXJ0aXN0OjllNDIzMWFlLWJjZDMtNGEzYS05YjIwLTk5MjYwZGY0NzdhMQ=="
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
