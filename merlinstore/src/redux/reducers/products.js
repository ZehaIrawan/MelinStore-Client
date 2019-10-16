import { GET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  product: [],
  loading: true,
  error: {},
};

const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload, loading: false };
    default:
      return state;
  }
};

export default products;
