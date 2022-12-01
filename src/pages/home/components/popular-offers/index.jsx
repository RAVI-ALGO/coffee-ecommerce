import React from "react";
import "./popular-offers.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PopularOffersPhone from "../popular-offers-phones";
import { useNavigate } from "react-router-dom";
const Popularoffers = () => {

  const navigate =useNavigate();

    const gotoViewAll = () =>{
        navigate("/products");
    }

  return (
    <div className="container popular-offers-main">
      <div className="top-part">
        <div className="heading">
          <h3 className="section-heading">Popular Mobile Offers</h3>
          <button className="sub-btn py-1 px-2 mx-3" onClick={gotoViewAll}>View All</button>
        </div>
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="10000" id="cutomtab" className="mb-3">
          <Tab
            eventKey="10000"
            title="'Under Rs. 10,000'"
            className="cutom-tab"
          >
            <PopularOffersPhone />
          </Tab>
          <Tab
            eventKey="15000"
            title="'Under Rs. 10,000 - Rs. 15000'"
            className="cutom-tab"
          >
            <PopularOffersPhone />
          </Tab>
          <Tab
            eventKey="25000"
            title="'Under Rs. 15,000 - Rs. 25000'"
            className="cutom-tab"
          >
            <PopularOffersPhone />
          </Tab>
          <Tab
            eventKey="50000"
            title="'Under Rs. 25,000 - Rs. 50000'"
            className="cutom-tab"
          >
            <PopularOffersPhone />
          </Tab>
          <Tab
            eventKey="50000Plus"
            title="'Above Rs. 50000'"
            className="cutom-tab"
          >
            <PopularOffersPhone />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Popularoffers;
