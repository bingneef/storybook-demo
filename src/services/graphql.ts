import ApolloClient from 'apollo-boost';
import queryString from 'query-string';

export const client = new ApolloClient({
  uri: 'http://104.248.205.188:4201/api',
  headers: {
    testid: queryString.parse(window.location.search).testid,
  },
});