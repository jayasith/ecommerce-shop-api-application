import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";

const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const currentItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (currentItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[currentItemIndex] };
    copyItem.quantity++;
    copy[currentItemIndex] = copyItem;
  }

  return { ...state, carts: copy };
};

const removeProductsFromCart = (state, productID) => {
  const copy = [...state.carts];
  const currentItemIndex = copy.findIndex((i) => i.product.id === productID);

  if (currentItemIndex > 0) {
    const currentItem = { ...copy[currentItemIndex] };
    currentItem.quantity--;

    if (currentItem === 0) {
      copy.splice(currentItem, 1);
    } else {
      copy[currentItemIndex] = currentItem;
    }
  }

  return { ...state, carts: copy };
};

const clearAllProductsFromCart = (state) => {
  return {
    ...state,
    carts: [],
  };
};

export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProductToCart(state, action.payload);
    case "REMOVE_FROM_CART":
      return removeProductsFromCart(state, action.payload);
    case "CLEAR_ALL_FROM_CART":
      return clearAllProductsFromCart(state);
    default:
      return state;
  }
};
