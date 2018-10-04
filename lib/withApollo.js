import ApolloClient from "apollo-boost";
import withApollo from "next-with-apollo";
import { defaults, resolvers } from "../localState";
import { API_URL } from "../config";

export default withApollo(
  () => new ApolloClient({ uri: API_URL, clientState: { defaults, resolvers } })
);
