import { createContext } from "react";

export default createContext({
  products: [],
  carts: [],
  address: {},
  userAuth: null,
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
  addProducts: () => {},
  setUserAuth: (userID) => {},
});
