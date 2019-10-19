import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../redux/actions/cart';

const CartItem = ({ title, price, img, quantity, id, removeCart }) => {
  return (
    <Fragment>
      <div className="cart">
        <img className="product-img" src={img} alt="" />
        <div className="cart-text">
          <h2>{title}</h2>
          <h3>${price}</h3>
        </div>
        <button
          onClick={() => {
            removeCart(id);
          }}
        >
          Remove
        </button>
        <div className="quantity">
          <button className="cart-button">-</button>
          <h4>{quantity}</h4>
          <button className="cart-button">+</button>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null,{ removeCart })(CartItem);
