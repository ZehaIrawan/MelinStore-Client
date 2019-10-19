import React, { useEffect,Fragment } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
import Product from './Product';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductList = ({ getProducts, loading, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <p>Loading ...</p>;
  }


  return (
    <Fragment>
      <Navbar/>
    <div className="product-container">
      {products.products.map(product => (
        <Product
          key={product.title}
          title={product.title}
          img={product.img}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
    <Footer/>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  {
    getProducts,
  },
)(ProductList);
