import React, { useEffect, useRef, useState } from 'react';

const PayButton = ({ data,total }) => {
  const product = {
    price: data.price,
    name: data.title,
    description: data.description.substring(0, 20),
    quantity: data.quantity,
  };

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
    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        <img alt={product.description} />
      </div>
    );
  }
  return <div ref={paypalRef} />;
};

export default PayButton;
