import { ApolloClient, InMemoryCache } from "@apollo/client";
// yes
const client = new ApolloClient({
  uri: "http://ace-development.ru:3005/graphql",
  cache: new InMemoryCache(),
});

export default client;
