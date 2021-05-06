import React, { useReducer } from "react";

import products from "../../data/productDetails";
import CartContext from "./CartContext";
import Reducer from "./Reducer";

const CartState = (props) => {
  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  const addProductToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const removeProductFromCart = (productID) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productID,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_ALL_FROM_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        address:{},
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
