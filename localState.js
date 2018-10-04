import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "./fragments";
export const defaults = {
  cart: []
};

export const resolvers = {
  Mutation: {
    toggleProduct: (_, variables, { cache, getCacheKey }) => {
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
      let newCart;
      let onCart;
      if (foundProduct) {
        const cleanedCart = cart.filter(aProduct => aProduct.id !== product.id);
        newCart = cleanedCart;
        onCart = false;
      } else {
        newCart = [...cart, product];
        onCart = true;
      }
      cache.writeData({
        data: {
          cart: newCart
        }
      });
      cache.writeFragment({
        id: `Product:${product.id}`,
        fragment: PRODUCT_FRAGMENT,
        data: {
          __typename: "Product",
          ...product,
          onCart
        }
      });
      return null;
    }
  },
  Product: {
    onCart: () => false
  }
};
