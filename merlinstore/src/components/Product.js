import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ title, price, description, img, id }) => {
  return (
    <Fragment>
      {" "}
      <Link to={`/product/${id}`}>
        <div className="product">
          <h2>{title}</h2>
          <img className="product-img" src={img} alt="" />
          <h3>${price}</h3>
        </div>
      </Link>
    </Fragment>
  );
};

export default connect(null)(Product);
