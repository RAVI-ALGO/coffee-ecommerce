import React from "react";
import "./breadCrumb.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumb = (props) =>{
  const {brand = "abc",name="xyz"} = props;
    return(<Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#/">
      {brand}
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#/">Mobile Phone</Breadcrumb.Item>
    <Breadcrumb.Item active>{name}</Breadcrumb.Item>
  </Breadcrumb>);
}

export default BreadCrumb;