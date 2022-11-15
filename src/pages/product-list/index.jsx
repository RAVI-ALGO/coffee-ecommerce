import React from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar";
import Filters from "./components/filters";
import ProductsMain from "./components/products-main";
import Sortby from "./components/sortby";
import "./product-list.css";

const Productlist = () => {
  return (
    <div className="product-list-main">
      <Header />
      <NavbarMain />
      <div className="body-main">
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-md-10 text-align-left mt-4">
            <div className="product-main-heading">
              <h2 className="product-heading">All Mobile Phones </h2>
              <Sortby />
            </div>
            <ProductsMain />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productlist;
