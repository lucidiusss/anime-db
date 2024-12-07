import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://shikimori.one/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
