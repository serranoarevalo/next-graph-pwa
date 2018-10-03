import { Query } from "react-apollo";
import { withRouter } from "next/router";
import { CATEGORY_QUERIES } from "./categoryQueries";
import CategoryPresenter from "./categoryPresenter";

const Category = props => (
  <>
    {console.log(props.router.query.id)}
    <Query query={CATEGORY_QUERIES} variables={{ id: props.router.query.id }}>
      {({ data }) => <CategoryPresenter data={data} />}
    </Query>
  </>
);

export default withRouter(Category);
