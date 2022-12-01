import React from "react";
import "./breadCrumb.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const BreadCrumb = () =>{
    return(<Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#/">
      Samsung
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#/">Mobile Phone</Breadcrumb.Item>
    <Breadcrumb.Item active>Samsung Galaxy Note</Breadcrumb.Item>
  </Breadcrumb>);
}

export default BreadCrumb;