import {ApolloClient, InMemoryCache} from '@apollo/client';

const graphQLConfig = {
  url: 'https://jsonplaceholder.ir/graphql',
};

export const graphQLCLient = new ApolloClient({
  uri: graphQLConfig.url,
  cache: new InMemoryCache(),
});
