import ApolloClient from 'apollo-boost';
import queryString from 'query-string';
import constants from '../config';

export const client = new ApolloClient({
  uri: constants.apiUrl,
  headers: {
    testid: queryString.parse(window.location.search).testid,
  },
});