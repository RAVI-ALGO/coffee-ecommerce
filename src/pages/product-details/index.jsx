import React from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar";
import Sharebtn from "../../common/components/share-button";
import BreadCrumb from "./components/bread-crumb";
import ProductDetailsSection from "./components/product-details-section";
import "./productDetails.css";

const ProductDetails = () => {
  return (
    <div className="p-details-main">
      <Header />
      <NavbarMain />
      <div className="container body-main">
        <BreadCrumb />
        <div className="container detail-main">
          <div className="row">
            <div className="col-md-4 bg-danger"></div>
            <div className="col-md-7 ">
              <ProductDetailsSection />
            </div>
            <div className="col-md-1">
              <Sharebtn />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
