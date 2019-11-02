import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
import Footer from './Footer';
import Navbar from './Navbar';
import Product from './Product';

const ProductList = ({ getProducts, loading, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
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
      <div className="product-container">
        {products.products.map(product => (
          <Product
            key={product.title}
            title={product.title}
            img={product.img}
            description={product.description}
            price={product.price}
            id={product._id}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  loading: state.products.loading,
});

export default connect(
  mapStateToProps,
  {
    getProducts,
  },
)(ProductList);
