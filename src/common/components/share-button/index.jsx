import React from "react";
import shareicon from "../../assets/icons/shareicon.svg";
import "./sharebtn.css";
const Sharebtn = () =>{
    return<div className="share-btn py-1">
        <img src={shareicon} className ="mx-1" />
        <span className="mx-1">Share</span>
    </div>
}

export default Sharebtn;