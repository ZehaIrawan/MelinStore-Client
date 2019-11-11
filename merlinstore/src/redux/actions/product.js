import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, PRODUCT_ERROR } from './types';

// Get PRODUCTS
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

// Get Product By Id
export const getProductById = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
