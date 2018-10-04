import { withRouter } from "next/router";
import { Query, Mutation } from "react-apollo";
import { PRODUCT_QUERY, ADD_TO_CART } from "./productQueries";
import ProductPresenter from "./productPresenter";

class ProductContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;
    return { id };
  }
  render() {
    const { id } = this.props;
    return (
      <Query query={PRODUCT_QUERY} variables={{ id }}>
        {({ data }) => (
          <Mutation mutation={ADD_TO_CART} variables={{ id }}>
            {toggleProduct => (
              <ProductPresenter data={data} toggleProduct={toggleProduct} />
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default withRouter(ProductContainer);
