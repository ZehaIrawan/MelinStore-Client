import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../redux/actions/cart';
import CartItem from './CartItem';
import Footer from './Footer';
import Navbar from './Navbar';

const Cart = ({ getCart, loading, cart }) => {
  useEffect(() => {
    getCart();
  }, [getCart]);

  if (loading) {
    return <p>Loading ...</p>;
  }

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
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProp = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProp,
  { getCart },
)(Cart);
