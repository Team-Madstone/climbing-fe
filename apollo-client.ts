import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'http://localhost/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup your client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
