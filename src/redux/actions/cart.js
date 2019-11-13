import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART,
  GET_CART,
  INCREASE_CART,
  REMOVE_CART,
} from './types';

// Get all products
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

// Increase quantity for an item in the cart
export const increaseCart = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/cart/${id}`, formData, config);

    dispatch({
      type: INCREASE_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Decrease quantity for an item in the cart
export const decreaseCart = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/cart/${id}`, formData, config);

    dispatch({
      type: DECREASE_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//Clear items from cart
export const clearCart = cart => async dispatch => {
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]._id);
    try {
      await axios.delete(`/api/cart/${cart[i]._id}`);
    } catch (err) {
      console.log(err);
    }
  }
  dispatch({
    type: CLEAR_CART,
    payload: cart.id,
  });
  dispatch(setAlert('Cart cleared', 'success'));
};
