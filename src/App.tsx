import React from 'react';
import Signup from './Pages/Signup';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.pigeonbolt.com/graphql',
  cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Signup />
    </ApolloProvider>
  );
}

export default App;
