import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
import Product from './Product';

const ProductList = ({ getProducts, loading, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <p>Loading ...</p>;
  }
  console.log(products.products);

  return (
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
