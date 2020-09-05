import React from 'react';

import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import User from './user';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});






function App() {


 

  return (
    <ApolloProvider client={client}>
      <div className="App">
        hello world from Graph QL
        <div>
          <User />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
