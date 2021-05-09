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

  const currentItem = { ...copy[currentItemIndex] };
  currentItem.quantity--;

  if (currentItem.quantity <= 0) {
    copy.splice(currentItemIndex, 1);
  } else {
    copy[currentItemIndex] = currentItem;
  }

  return { ...state, carts: copy };
};

const clearAllProductsFromCart = (state) => {
  return {
    ...state,
    carts: [],
  };
};

const addProducts = (state, fetchedProducts) => {
  return {
    ...state,
    products: fetchedProducts,
  };
};

const setUserAuth = (state, userID) => {
  return {
    ...state,
    userAuth: userID,
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
    case "ADD_PRODUCTS":
      return addProducts(state, action.payload);
    case "SET_USER_AUTH":
      return setUserAuth(state, action.payload);
    default:
      return state;
  }
};
