import {ADD_TO_CART, GET_CART, REMOVE_CART } from '../actions/types';

const initialState = {
  cart: [],
  loading: true,
  error: {},
};

const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CART:
      return { ...state, cart: payload, loading: false };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [payload, ...state.cart],
        loading: false,
      };
      case REMOVE_CART:
          return {
            ...state,
           cart: state.books.filter(cart => cart._id !== payload),
            loading: false,
          };
    default:
      return state;
  }
};

export default cart;
