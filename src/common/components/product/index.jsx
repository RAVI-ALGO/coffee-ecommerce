import React from "react";
import "./product.css";

const Product = (props) => {
  const {imageFile, name, currentPrice, originalPrice, offer, emi, discount } =
    props.productData;
    
  return (
    <div className="product">
      <div className="img-main">
        <img
          src={imageFile}
          alt="phone"
          className="img-fluid"
        />
      </div>
      <div className="product-offer">{offer}</div>
      <div className="product-name">{name}</div>
      <div className="product-prices">
        <div className="current-price">{currentPrice}</div>
        <div className="original-price">{originalPrice}</div>
        <div className="discount">{discount}</div>
      </div>
      <div className="emi">{emi}</div>
    </div>
  );
};

export default Product;
