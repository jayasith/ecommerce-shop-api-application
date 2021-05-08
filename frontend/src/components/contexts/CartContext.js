import { createContext } from "react";

export default createContext({
  products: [],
  carts: [],
  address:{},
  additem:{},
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
});
