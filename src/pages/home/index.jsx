import React from "react";
import "./home.css";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar";
import ImageSlider from "./components/carousel";
import Popularoffers from "./components/popular-offers";
import Footer from "../../common/components/footer";

const Home = () =>{
    return<div className="home-page">
            <Header />
            <NavbarMain />
            <ImageSlider />
            <div className="body-main" >
            <Popularoffers />
            </div>
            
            <Footer />
    </div>
}

export default Home;