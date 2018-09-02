const SHOPPING_CART = '@@redux-cart';

export const ADD_TO_CART = `${SHOPPING_CART}/ADD_TO_CART`;
export const addToCart = id => dispatch => (dispatch({ type: ADD_TO_CART, id }));
