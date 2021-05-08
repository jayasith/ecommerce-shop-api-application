import { createContext, useState } from "react";

export default createContext({
  products: [],
  carts: [],
  address: {},
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
});
