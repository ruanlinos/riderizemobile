import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './src/routes';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
