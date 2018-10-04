import { gql } from "apollo-boost";

export const GET_PRODUCTS = gql`
  {
    cart @client {
      id
    }
  }
`;
