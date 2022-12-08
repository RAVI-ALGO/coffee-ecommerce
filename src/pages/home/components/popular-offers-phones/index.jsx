import React from "react";
import Product from "../../../../common/components/product";
import "./popular-offers-phones.css";
import phoneData2 from "../../../../common/constants/sample-phones-list.js"
const PopularOffersPhone = () => {
  return (
    <div className="pupular-phones-main">
      <div className="row">
      {phoneData2.slice(0, 4).map((phones,index) =>
      {
        
        return <div className="col-3" key ={index}>
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
