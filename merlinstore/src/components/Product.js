import PropTypes from 'prop-types';
import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';


const Product = ({ title, price, description, img,addToCart ,id}) => {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title,
      price,
      description,
      img,
      quantity: 1,
      id
    };

    addToCart(formData);
  };

  return (
    <Fragment> <Link to={`/product/${id}`}>
    <div className="product">
      <h2>{title}</h2>
      <img className="product-img" src={img} alt="" />
      {/* <p>{description}</p>
      <h3>${price}</h3>
      <button className="add-to-cart" onClick={handleSubmit}>Add to cart</button> */}
    </div>
    </Link>
    </Fragment>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(null,{ addToCart })(Product);
