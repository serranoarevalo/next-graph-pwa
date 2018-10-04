import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const GET_PRODUCTS = gql`
  {
    cart @client {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
