import React from 'react';
import Router from './router';
import { ApolloProvider } from "react-apollo";
import { client } from './services/graphql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
