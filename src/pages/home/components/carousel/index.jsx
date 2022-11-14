import React, { useState } from 'react';
import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import imgSlider1 from "../../../../common/assets/images/img-slider-1.jpeg";
import imgSlider2 from "../../../../common/assets/images/img-slider-2.webp";
import imgSlider3 from "../../../../common/assets/images/img-slider-3.webp";
import imgSlider4 from "../../../../common/assets/images/img-slider-4.webp";
import imgSlider5 from "../../../../common/assets/images/img-slider-5.webp";

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
          src={imgSlider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>

    );
}

export default ImageSlider;