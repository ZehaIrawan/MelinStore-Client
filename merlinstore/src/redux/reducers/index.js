import { combineReducers } from 'redux';
import products from './products';
import auth from './auth'
import cart from './cart'
import orders from './orders'

export default combineReducers({
  products,
  cart,
  auth,
  orders
});