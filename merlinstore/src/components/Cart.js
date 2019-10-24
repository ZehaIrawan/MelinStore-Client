import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  clearCart,
  decreaseCart,
  getCart,
  increaseCart,
} from '../redux/actions/cart';
import CartItem from './CartItem';
import Footer from './Footer';
import Navbar from './Navbar';
import PayButton from './PayButton';

const Cart = ({
  getCart,
  loading,
  cart,
  increaseCart,
  decreaseCart,
  clearCart,
}) => {
  useEffect(() => {
    getCart();
  }, [getCart]);

  if (loading) {
    return (
      <Fragment>
        <Navbar />
        Loading...
        <Footer />
      </Fragment>
    );
  }

  let total = 0;
  cart.cart.map(item => {
    return (total += item.price * item.quantity);
  });
  if (cart.cart.length === 0)
    return (
      <Fragment>
        <Navbar />
        <h3 style={{ textAlign: 'center' }}> Your cart is empty</h3>
        <button
          onClick={() => {
            clearCart(cart.cart);
          }}
          className="total"
        >
          Clear Cart
        </button>
        <h3 className="total">Total: ${total}</h3>
        <Footer />
      </Fragment>
    );

  return (
    <Fragment>
      <Navbar />
      <div>
        {cart.cart.map(cart => (
          <CartItem
            key={cart._id}
            id={cart._id}
            title={cart.title}
            img={cart.img}
            description={cart.description}
            price={cart.price}
            quantity={cart.quantity}
            increaseCart={increaseCart}
            decreaseCart={decreaseCart}
          />
        ))}
      </div>
      <button
        onClick={() => {
          clearCart(cart.cart);
        }}
        className="total"
      >
        Clear Cart
      </button>
      <h3 className="total">Total: ${total}</h3>
      <PayButton data={cart.cart[0]} total={total} />
      <Footer />
    </Fragment>
  );
};

const mapStateToProp = state => ({
  cart: state.cart,
  loading: state.cart.loading,
});

export default connect(
  mapStateToProp,
  { getCart, increaseCart, decreaseCart, clearCart },
)(Cart);
