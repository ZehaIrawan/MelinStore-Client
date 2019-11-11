import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../redux/actions/product';
import Footer from './Footer';
import Navbar from './Navbar';

const ProductItem = ({ match, getProductById, products }) => {
  useEffect(() => {
    getProductById(match.params.id);
  }, [getProductById, match.params.id]);

  console.log(products);
  if (products.loading) {
    return (
      <Fragment>
        <Navbar />
        <p>Loading ...</p>
        <Footer />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Navbar />
      <h2>{products.product.title}</h2>
      <img className="product-img" src={products.product.img} alt="" />
      <p>{products.product.description}</p>
      <h3>${products.product.price}</h3>
      <button className="add-to-cart" onClick={products.product.handleSubmit}>
        Add to cart
      </button>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  { getProductById },
)(ProductItem);
