import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    product(where: { id: $id }) {
      ...ProductItems
      description
    }
  }
  ${PRODUCT_FRAGMENT}
`;
