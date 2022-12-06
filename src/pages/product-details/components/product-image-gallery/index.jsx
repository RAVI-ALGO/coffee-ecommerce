import React, { useState } from "react";
import "./product-image-gallery.css";

const ProductImageGallery = (props) => {
  const { images = [] } = props;
  //const phoneimages = [phone1, phone2, phone3, phone4];
  const [selectedthumbnail, setThumbnail] = useState(0);
  return (
    <div className="product-gallery-main">
      <div className="row px-3">
        <div className="col-md-2 image-thumbnail-main">
          {images.map((phoneimg, index) => {
            return (
              <div
                key={phoneimg}
                className={`image-thumbnail my-2 ${
                  selectedthumbnail === index ? "selected" : ""
                }`}
                onClick={() => {
                  setThumbnail(index);
                }}
              >
                <img
                  className="image-fluid custom-image-thumbnail"
                  src={phoneimg}
                  alt="Product image"
                />
              </div>
            );
          })}
        </div>
        <div className="col-md-10  product-image-section">
          <img
            className="image-fluid product-image mt-2"
            src={images[selectedthumbnail]}
            alt="Product image"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductImageGallery;
