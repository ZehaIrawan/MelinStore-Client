import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../redux/actions/cart';

const CartItem = ({
  title,
  price,
  img,
  quantity,
  id,
  removeCart,
  increaseCart,
  description,
  decreaseCart,
}) => {
  const formData = {
    title,
    price,
    img,
    quantity,
    description,
  };

  return (
    <Fragment>
      <div className="cart">
        <img className="product-img" src={img} alt="" />
        <div className="cart-text">
          <h2>{title}</h2>
          <h3>${price}</h3>
        </div>
        <div
          onClick={() => {
            removeCart(id);
          }}
        >
          Remove
        </div>
        <div className="quantity">
          <button
            onClick={() => {
              decreaseCart(id, {
                ...formData,
                quantity: formData.quantity - 1,
              });
            }}
            className="cart-button"
          >
            -
          </button>
          <h4>{quantity}</h4>
          <button
            onClick={() => {
              increaseCart(id, {
                ...formData,
                quantity: formData.quantity + 1,
              });
            }}
            className="cart-button"
          >
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  { removeCart },
)(CartItem);
