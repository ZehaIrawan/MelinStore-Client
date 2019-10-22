import React, { Fragment, useEffect, useRef,useState } from 'react';
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

const Cart = ({
  getCart,
  loading,
  cart,
  increaseCart,
  decreaseCart,
  clearCart,
}) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    getCart();
    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
          },
          onError: err => {
            setError(err);
            console.error(err);
          },
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);
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

  console.log(cart.cart[0].price);

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
