import { Query } from "react-apollo";
import { HOME_QUERIES } from "./indexQueries";
import IndexPresenter from "./indexPresenter";

export default () => (
  <Query query={HOME_QUERIES}>
    {({ data }) => <IndexPresenter data={data} />}
  </Query>
);
