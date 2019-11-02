import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const OrderItem = ({ title, img, dl, description }) => {
  return (
    <Fragment>
      <div className="cart">
        <img className="product-img" src={img} alt="" />
        <div className="cart-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>
            <a target="_blank" rel="noopener noreferrer" href={dl}>
              Download
            </a>
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default connect()(OrderItem);
