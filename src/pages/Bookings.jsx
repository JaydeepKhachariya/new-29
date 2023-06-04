import React, { useState } from "react";
import normalImage1 from "../assets/images/1.png";
import normalImage2 from "../assets/images/2.png";
import normalImage3 from "../assets/images/3.png";
import normalImage4 from "../assets/images/4.png";
import normalImage5 from "../assets/images/5.png";
import normalImage6 from "../assets/images/6.png";
import normalImage7 from "../assets/images/7.png";
import normalImage8 from "../assets/images/8.png";
import normalImage9 from "../assets/images/9.png";
import normalImage10 from "../assets/images/10.png";
import normalImage11 from "../assets/images/11.png";
import normalImage12 from "../assets/images/12.png";
import normalImage13 from "../assets/images/13.png";
import normalImage14 from "../assets/images/14.png";
import normalImage15 from "../assets/images/15.png";
import normalImage16 from "../assets/images/16.png";

import flipImage1 from "../assets/images/flip-1.png";
import flipImage2 from "../assets/images/flip-2.png";
import flipImage3 from "../assets/images/flip-3.png";
import flipImage4 from "../assets/images/flip-4.png";
import flipImage5 from "../assets/images/flip-5.png";
import flipImage6 from "../assets/images/flip-6.png";
import flipImage7 from "../assets/images/flip-7.png";
import flipImage8 from "../assets/images/flip-8.png";
import flipImage9 from "../assets/images/flip-9.png";
import flipImage10 from "../assets/images/flip-10.png";
import flipImage11 from "../assets/images/flip-11.png";
import flipImage12 from "../assets/images/flip-12.png";
import flipImage13 from "../assets/images/flip-13.png";
import flipImage14 from "../assets/images/flip-14.png";
import flipImage15 from "../assets/images/flip-15.png";
import flipImage16 from "../assets/images/flip-16.png";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [blockImages, setBlockImages] = useState([
    normalImage1,
    normalImage2,
    normalImage3,
    normalImage4,
    normalImage5,
    normalImage6,
    normalImage7,
    normalImage8,
    normalImage9,
    normalImage10,
    normalImage11,
    normalImage12,
    normalImage13,
    normalImage14,
    normalImage15,
    normalImage16,
  ]);

  const handleBlockClick = (blockIndex) => {
    const updatedBlockImages = blockImages.map((image, index) =>
      index <= blockIndex ? getFlipImage(image) : image
    );
    setBlockImages(updatedBlockImages);
  };

  const getFlipImage = (currentImage) => {
    // Map normal images to corresponding flip images
    const normalImages = [
      normalImage1,
      normalImage2,
      normalImage3,
      normalImage4,
      normalImage5,
      normalImage6,
      normalImage7,
      normalImage8,
      normalImage9,
      normalImage10,
      normalImage11,
      normalImage12,
      normalImage13,
      normalImage14,
      normalImage15,
      normalImage16,
    ]; // Add other normal images
    const flipImages = [
      flipImage1,
      flipImage2,
      flipImage3,
      flipImage4,
      flipImage5,
      flipImage6,
      flipImage7,
      flipImage8,
      flipImage9,
      flipImage10,
      flipImage11,
      flipImage12,
      flipImage13,
      flipImage14,
      flipImage15,
      flipImage16,
    ]; // Add other flip images

    const index = normalImages.indexOf(currentImage);
    if (index !== -1) {
      return flipImages[index];
    }

    return currentImage;
  };

  return (
    <div className=" h-[100vh]">
      <div className="block-grid">
        {blockImages.map((image, index) => (
          <div
            key={index}
            className="block"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => handleBlockClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
