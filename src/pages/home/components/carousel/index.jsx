import React, { useState } from 'react';
import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import google from "../../assets/images/google.png";
import mi from "../../assets/images/mi.png";
import moto from "../../assets/images/moto.png";
import oppo from "../../assets/images/oppo.png";
import samsung from "../../assets/images/samsung.png";
const ImageSlider = () =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={google}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mi}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={moto}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={oppo}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={samsung}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>

    );
}

export default ImageSlider;