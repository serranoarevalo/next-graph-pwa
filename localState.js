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
      const { cart } = cache.readQuery({ query: cartQuery });
      const foundProduct = cart.find(aProduct => aProduct.id === product.id);
      if (foundProduct) {
        return null;
      }
      cache.writeData({
        data: {
          cart: [...cart, product]
        }
      });
      cache.writeFragment({
        id: `Product:${product.id}`,
        fragment: PRODUCT_FRAGMENT,
        data: {
          __typename: "Product",
          ...product,
          onCart: true
        }
      });
      return null;
    }
  },
  Product: {
    onCart: () => false
  }
};
