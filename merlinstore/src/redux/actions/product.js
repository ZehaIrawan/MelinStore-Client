import axios from 'axios';
import { GET_PRODUCTS } from './types';

// Get PRODUGET_PRODUCTS
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
