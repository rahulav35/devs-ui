import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Thirdpage from "./Thirdpage";

function Carouselpage({ level, levelno, title, description }) {
  const [images, setImages] = useState([
    "/Assets/images/image1.JPG",
    "/Assets/images/image2.JPG",
  ]);
  return (
    <div className="h-[100%] w-[90%] max-w-[250px]  shadow-md shadow-black rounded-3xl flex flex-col justify-between items-center py-4 px-4 box-border">
      <div>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          dynamicHeight={true}
          className="max-h-[10vh] w-[100%] rounded-3xl shadow-lg shadow-black"
        >
          {images.map((url) => {
            return <img src={url} />;
          })}
        </Carousel>
      </div>

      <div className=" flex justify-between items-center h-[37%] w-[100%]">
        <div className="h-[100%] w-[85%]  flex flex-col items-start justify-evenly">
          <div className="h-[35px] w-[120px] rounded-lg border-2 border-black flex flex-row justify-between items-center mb-1 mr-[60px]">
            <h1 className="text-md ml-1">{level}</h1>
            <h1 className="h-[23px] w-[30px] rounded-md bg-green-700 mr-1 text-md flex items-center justify-center">
              {levelno}
            </h1>
          </div>
          <h1 className="text-xl font-bold">{title}</h1>
          <h1 className="text-md">{description}</h1>
        </div>
        <BiDotsVerticalRounded size={45} className="mt-24" />
      </div>
    </div>
  );
}

export default Carouselpage;
