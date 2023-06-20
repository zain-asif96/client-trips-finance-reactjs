import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

export const apolloClient = new ApolloClient({
  uri: window.location.hostname.includes('localhost')
    ? 'http://localhost:9000/graphql'
    : 'https://3.232.112.198:9000/graphql',
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});
