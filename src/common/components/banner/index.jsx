import React from "react";
import "./banner.css";
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";
import Logo from "../logo/logo";
const Banner = () =>{
    return <div className="app-banner padding-50">
    <Logo 
        theme="text-light"
    />
        <img src={mobileLarge} alt="mobile image" className="relative top70 image-fluid" />
        <img src={mobileBottom} alt="mobile image" className="image-fluid" />
    </div>
}
export default Banner;