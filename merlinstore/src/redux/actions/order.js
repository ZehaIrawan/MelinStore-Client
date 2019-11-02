import axios from 'axios';
import { GET_ORDERS } from './types';

// Get Orders
export const getOrders = () => async dispatch => {
  try {
    const res = await axios.get('/api/orders');

    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Orders
export const addOrders = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/orders', id, config);

    const update = await axios.get('api/orders')

    dispatch({
      type: GET_ORDERS,
      payload: update.data,
    });
  } catch (err) {
    console.log(err);
  }
};
