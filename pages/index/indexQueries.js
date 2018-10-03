import { gql } from "apollo-boost";

export const HOME_QUERIES = gql`
  {
    categories {
      id
      name
    }
  }
`;
