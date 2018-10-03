import { Query } from "react-apollo";
import { withRouter } from "next/router";
import { CATEGORY_QUERIES } from "./categoryQueries";
import CategoryPresenter from "./categoryPresenter";
import ReactCalendar from "rc-calendar";

class Category extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;
    return { id };
  }
  render() {
    const { id } = this.props;
    return (
      <Query query={CATEGORY_QUERIES} variables={{ id }}>
        {({ data }) => <CategoryPresenter data={data} />}
      </Query>
    );
  }
}

export default withRouter(Category);
