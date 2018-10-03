import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const CATEGORY_QUERIES = gql`
  query categoryQueries($id: ID!) {
    category(where: { id: $id }) {
      products {
        ...ProductItems
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;
