import React from "react";
import Product from "../../../../common/components/product";
import "./popular-offers-phones.css";
import phoneData from "../../../../common/constants/sample-phone.js";
const PopularOffersPhone = () => {
  return (
    <div className="pupular-phones-main">
      <div className="row">
      {phoneData.map((phones,index) =>
      {
        
        return <div className="col" key ={index}>
        <Product 
            
            productData={phones}
            
        />
        </div>
      })}
      </div>
    </div>
  );
};

export default PopularOffersPhone;
