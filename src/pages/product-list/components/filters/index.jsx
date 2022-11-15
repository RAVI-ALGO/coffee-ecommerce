import React from "react";
import "./filters.css";
import Form from "react-bootstrap/Form";
import {brandoption} from "../../constants/brandoption";

const Filters = () => {
  return (
    <div className="body-main col-md-2">
      <h3 className="filter-main-heading">Filters</h3>
      <div className="filter-main">
        <div className="brand-filter">
          <div className="brand-top">
            <h3 className="brand-filter-heading">Brands</h3>
            <a href="#/" className="pink-link">
              View all
            </a>
          </div>
          <div className="brand-options">
            {brandoption.map((brand, index) => {
              return (
                <div className="brand-option" key={index}>
                  <div className="d-flex">
                    <input type="checkbox" />
                    <span>{brand.name}</span>
                  </div>
                  <span>{brand.count}</span>
                </div>
              );
            })}
          </div>
          <div className="brand-filter-bottom"></div>
        </div>
        <hr className="filter-seperator" />
        <div className="price-filter">
          <div className="price-top">
            <h5 className="price-filter-heading">Price</h5>
          </div>
          <div className="price-main">
            <Form.Label className="custom-price-value">
              ₹10,000 - ₹25,000
            </Form.Label>
            <Form.Range />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
