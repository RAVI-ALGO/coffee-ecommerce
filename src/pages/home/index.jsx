import React from "react";
import "./home.css";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar";
import ImageSlider from "./components/carousel";

const Home = () =>{
    return<div className="home-page">
            <Header />
            <NavbarMain />
            <ImageSlider />
            <section className='common-section'>Popular offers</section>

            <section className='common-section'>Payments</section>

            <section className='common-section'>Footer</section>
    </div>
}

export default Home;