import React from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar";
import Sharebtn from "../../common/components/share-button";
import ProductDetailsSection from "./components/product-details-section";
import ProductImageGallery from "./components/product-image-gallery";
import "./productDetails.css";
import SamplePhonesList from "../../common/constants/sample-phones-list.js";
import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import BreadCrumb from "./components/bread-crumb";


const ProductDetails = () => {
  const param = useParams();
  const {productid} = param;
  const [productdetail, setProductDetail] = useState({});

  const getProductDetails = (productid) => {
      const matchingProduct = SamplePhonesList.find(Phonesdata => {
          return Phonesdata.id === productid;
      });
      setProductDetail(matchingProduct);
  };
    
  useEffect(() => {
      getProductDetails(productid);
  }, [productid]);

  return (
    <div className="p-details-main">
      <Header />
      <NavbarMain />
      <div className="container body-main">
        <BreadCrumb brand={productdetail.brand} name={productdetail.name} />
        <div className="container detail-main">
          <div className="row">
            <div className="col-md-4 "><ProductImageGallery images={productdetail.imageFile} /></div>
            <div className="col-md-7 ">
              <ProductDetailsSection ProductDetails={productdetail} />
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
