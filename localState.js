import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "./fragments";
export const defaults = {
  cart: []
};

export const resolvers = {
  Mutation: {
    addProduct: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: "Product", id: variables.id });
      const fragment = gql`
        ${PRODUCT_FRAGMENT}
      `;
      const product = cache.readFragment({ fragment, id });
      const cartQuery = gql`
        {
          cart @client {
            id
          }
        }
      `;
      const cartCache = cache.readQuery({ query: cartQuery });
      cache.writeData({
        data: {
          cart: [...cartCache.cart, product]
        }
      });
      return null;
    }
  }
};
