import { Query } from "react-apollo";
import { SEARCH_QUERY } from "./searchQueries";
import SearchPresenter from "./searchPresenter";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.searchTimeout = null;
  }
  state = {
    searchingBy: null,
    searching: false
  };
  render() {
    const { searchingBy, searching } = this.state;
    return (
      <Query
        query={SEARCH_QUERY}
        variables={{ keyword: searchingBy }}
        skip={searchingBy === null || searchingBy === "" || !searching}
      >
        {({ data }) => (
          <SearchPresenter
            updateSearch={this._updateSearch}
            searchingBy={searchingBy}
            data={data}
          />
        )}
      </Query>
    );
  }
  _updateSearch = event => {
    this.setState({ searching: false });
    clearTimeout(this.searchTimeout);
    const {
      target: { value }
    } = event;
    this.setState({
      searchingBy: value
    });

    this.searchTimeout = setTimeout(() => {
      this.setState({
        searching: true
      });
    }, 500);
  };
}

export default SearchContainer;
