import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearCart } from '../redux/actions/cart';
import { addOrders } from '../redux/actions/order';

const PayButton = ({ products, total, clearCart, cart, addOrders }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Stuff from merlinstore',
                amount: {
                  currency_code: 'USD',
                  value: total,
                },
                // Testing to add details of the order
                // item: [
                //   {
                //     name: product.name,
                //     price: product.price,
                //     unit_amount: 2,
                //     quantity: product.quantity,
                //   },
                //   {
                //     name: product.name,
                //     price: product.price,
                //     unit_amount: 2,
                //     quantity: product.quantity,
                //   },
                // ],
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          products.map(e => {
            addOrders({ id: e.id });
          });
          clearCart(cart.cart);
        console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(error);
        },
      })
      .render(paypalRef.current);
  }, [total]);

  if (paidFor) {
    alert(
      'Congrats, you just bought it! Check your order to download your ebook',
    );
    return <Redirect to="/your_account_orders" />;
  }
  return <div ref={paypalRef} />;
};

const mapStateToProp = state => ({
  cart: state.cart,
  loading: state.cart.loading,
});

export default connect(
  mapStateToProp,
  { clearCart, addOrders },
)(PayButton);
