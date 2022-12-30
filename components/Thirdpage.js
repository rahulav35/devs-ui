import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Carouselpage from "./Carousel";

function Thirdpage() {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-start items-center pt-[10%] sm:pt-[9%] overflow-x-hidden">
      <h1 className="text-3xl font-bold my-3"> Top Challenges</h1>
      <div className="h-[550px] w-[100%] my-5 flex flex-row justify-around items-center">
        <Carouselpage
          level="Level 1"
          levelno="1"
          title="Assets"
          description="First assets"
        />
        <Carouselpage
          level="Level 4"
          levelno="4"
          title="Assets"
          description="Assets of Devs-ui"
        />
        <Carouselpage
          level="Level 3"
          levelno="3"
          title="Dream job finder"
          description="An app to find jobs"
        />
        <Carouselpage
          level="Level 3"
          levelno="3"
          title="NFT Apps"
          description="nft market place"
        />
      </div>
    </div>
  );
}

export default Thirdpage;
