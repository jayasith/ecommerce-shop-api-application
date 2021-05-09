import React, { useReducer, useState } from "react";

import Context from "./Context";
import Reducer from "./Reducer";

const State = (props) => {
  const [state, dispatch] = useReducer(Reducer, { carts: [], products: [] });

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

  const addProducts = (fetchedProducts) => {
    dispatch({ type: "ADD_PRODUCTS", payload: fetchedProducts });
  };

  const setUserAuth = (userID) => {
    dispatch({ type: "SET_USER_AUTH", payload: userID });
  };

  return (
    <Context.Provider
      value={{
        products: state.products,
        carts: state.carts,
        userAuth: state.userAuth,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        addProducts: addProducts,
        setUserAuth: setUserAuth,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
