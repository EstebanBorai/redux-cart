const SHOPPING_CART = '@@redux-cart';

export const ADD_TO_CART = `${SHOPPING_CART}/ADD_TO_CART`;
export const addToCart = id => ({ type: ADD_TO_CART, id });

export const REMOVE_FROM_CART = `${SHOPPING_CART}/REMOVE_FROM_CART`;
export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id });
