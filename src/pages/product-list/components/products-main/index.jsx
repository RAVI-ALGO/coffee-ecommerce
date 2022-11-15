import React from "react";
import "./products-main.css";
import Product from "../../../../common/components/product";
import SamplePhonesList from "../../../../common/constants/sample-phones-list.js";
import Pagination from "react-bootstrap/Pagination";
const ProductsMain = () => {
  return (
    <div className="products-main">
      <div className="all-products-list">
        <div className="row">
          {SamplePhonesList.map((phone, index) => {
            return (
              <div className="col-md-3" key={index}>
                <Product productData={phone} key={index} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <Pagination className="custom-pagination">
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default ProductsMain;
