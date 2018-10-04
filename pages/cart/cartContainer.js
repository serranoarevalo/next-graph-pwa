import { Query } from "react-apollo";
import CartPresenter from "./cartPresenter";
import { GET_PRODUCTS } from "./cartQueries";

export default () => (
  <Query query={GET_PRODUCTS}>
    {({ data }) => <CartPresenter data={data} />}
  </Query>
);
