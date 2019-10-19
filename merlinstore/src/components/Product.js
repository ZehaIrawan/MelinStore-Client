import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

const Product = ({ title, price, description, img,addToCart }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title,
      price,
      description,
      img,
      quantity: 1,
    };

    addToCart(formData);
  };

  return (
    <div className="product">
      <h2>{title}</h2>
      <img className="product-img" src={img} alt="" />
      <p>{description}</p>
      <h3>${price}</h3>
      <button onClick={handleSubmit}>Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(null,{ addToCart })(Product);
