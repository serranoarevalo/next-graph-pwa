import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const SEARCH_QUERY = gql`
  query search($keyword: String!) {
    products(
      where: {
        OR: [{ name_contains: $keyword }, { description_contains: $keyword }]
      }
    ) {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
