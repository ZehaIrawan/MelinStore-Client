import { GET_ORDERS } from '../actions/types';

const initialState = {
  loading: true,
  error: {},
  orders: [],
};

const orders = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ORDERS:
      return { ...state, orders: payload, loading: false };
    default:
      return state;
  }
};

export default orders;
