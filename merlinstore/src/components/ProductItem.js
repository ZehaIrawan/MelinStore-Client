import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { getProductById } from "../redux/actions/product";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductItem = ({ match, getProductById, products, addToCart }) => {
  useEffect(() => {
    getProductById(match.params.id);
  }, [getProductById, match.params.id]);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title: products.product.title,
      price: products.product.price,
      description: products.product.description,
      img: products.product.img,
      quantity: 1,
      id: products.product._id
    };

    addToCart(formData);
  };

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
      <button className="add-to-cart" onClick={handleSubmit}>
        Add to cart
      </button>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

ProductItem.propTypes = {
  addToCart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getProductById, addToCart })(
  ProductItem
);
