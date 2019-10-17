import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = ({title,price,description,img}) => {
  return (
    <div className="product">
      <h2>{title}</h2>
      <img className="product-img" src={img} alt=""/>
      <p>{description}</p>
    <h3>${price}</h3>

    </div>
  );
};

export default Product;
