import axios from 'axios';
import { setAlert } from './alert';
import { ADD_TO_CART, GET_CART, REMOVE_CART } from './types';

// Get PRODUGET_PRODUCTS
export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart');

    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add an item to cart
export const addToCart = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/cart', formData, config);

    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });

    dispatch(setAlert('Item added to cart', 'success'));
  } catch (err) {
    console.log(err);
  }
};

// Remove item from cart
export const removeCart = id => async dispatch => {
  try {
    await axios.delete(`/api/cart/${id}`);

    dispatch({
      type: REMOVE_CART,
      payload: id,
    });

    dispatch(setAlert('Item Removed from cart', 'success'));
  } catch (err) {
    console.log(err);
  }
};
