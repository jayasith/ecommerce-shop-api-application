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

  const [address, setUpdate] = useState([{ name: "name" }]);

  return (
    <Context.Provider
      value={{
        products: state.products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        addProducts: addProducts,
        delivary: [address, setUpdate],
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
