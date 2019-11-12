import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART,
  GET_CART,
  INCREASE_CART,
  REMOVE_CART,
} from '../actions/types';

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
        cart: state.cart.filter(cart => cart._id !== payload),
        loading: false,
      };
    case INCREASE_CART:
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          // Find the item with the matching id

          if (item._id === payload._id) {
            // Return a new object

            return {
              ...item, // copy the existing item
              quantity: payload.quantity,
            };
          }
          // Leave every other item unchanged

          return item;
        }),

        loading: false,
      };

    case DECREASE_CART:
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          // Find the item with the matching id

          if (item._id === payload._id) {
            // Return a new object

            return {
              ...item, // copy the existing item
              quantity: payload.quantity,
            };
          }
          // Leave every other item unchanged

          return item;
        }),

        loading: false,
      };
    case CLEAR_CART:
      return {
        ...state,cart:[]
      };

    default:
      return state;
  }
};

export default cart;
