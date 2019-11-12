import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../redux/actions/order';
import Footer from './Footer';
import Navbar from './Navbar';
import OrderItem from './OrderItem';

const Order = ({ getOrders, loading, orders }) => {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (loading) {
    return (
      <Fragment>
        <Navbar />
        Loading...
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      {orders.orders.map(order => (
        <OrderItem
          key={order._id}
          title={order.title}
          img={order.img}
          description={order.description}
          dl={order.dl}
        />
      ))}
      <Footer />
    </Fragment>
  );
};

const mapStateToProp = state => ({
  orders: state.orders,
  loading: state.orders.loading,
});

export default connect(
  mapStateToProp,
  { getOrders },
)(Order);
