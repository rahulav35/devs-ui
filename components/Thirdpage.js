import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Thirdpage() {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-start items-center pt-[10%] sm:pt-[9%] overflow-x-hidden">
      <h1 className="text-3xl font-bold my-3"> Top Challenges</h1>
      <div className="h-[550px] w-[100%] my-5 flex flex-row justify-around items-center">
        <div className="h-[100%] w-[18%]  shadow-md shadow-black rounded-3xl flex flex-col justify-between items-center py-4 px-4 box-border">
          <div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              dynamicHeight={true}
              className="max-h-[10vh] w-[100%] rounded-3xl shadow-lg shadow-black"
            >
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%] "
                src="/Assets/images/image1.JPG"
                alt=""
              />
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%]"
                src="/Assets/images/image2.JPG"
                alt=""
              />
            </Carousel>
          </div>

          <div className=" flex justify-between items-center h-[37%] w-[100%]">
            <div className="h-[100%] w-[85%]  flex flex-col items-center justify-evenly">
              <div className="h-[35px] w-[120px] rounded-lg border-2 border-black flex flex-row justify-between items-center mb-1 mr-[60px]">
                <h1 className="text-md ml-1">Level 4</h1>
                <h1 className="h-[23px] w-[30px] rounded-md bg-green-700 mr-1 text-md flex items-center justify-center">
                  3
                </h1>
              </div>
              <h1 className="text-3xl font-bold">Assets</h1>
              <h1 className="text-lg">Aseets of devs-ui</h1>
            </div>
            <BiDotsVerticalRounded size={45} className="mt-24" />
          </div>
        </div>

        <div className="h-[100%] w-[18%] shadow-md shadow-black rounded-3xl flex flex-col justify-between items-center py-4 px-4 box-border">
          <div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              dynamicHeight={true}
              className="max-h-[10vh] w-[100%] rounded-3xl shadow-lg shadow-black"
            >
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%] "
                src="/Assets/images/image1.JPG"
                alt=""
              />
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%]"
                src="/Assets/images/image2.JPG"
                alt=""
              />
            </Carousel>
          </div>

          <div className=" flex justify-between items-center h-[37%] w-[100%]">
            <div className="h-[100%] w-[85%]  flex flex-col items-center justify-evenly">
              <div className="h-[35px] w-[120px] rounded-lg border-2 border-black flex flex-row justify-between items-center mb-1 mr-[60px]">
                <h1 className="text-md ml-1">Level 4</h1>
                <h1 className="h-[23px] w-[30px] rounded-md bg-green-700 mr-1 text-md flex items-center justify-center">
                  3
                </h1>
              </div>
              <h1 className="text-3xl font-bold">Assets</h1>
              <h1 className="text-lg">Aseets of devs-ui</h1>
            </div>
            <BiDotsVerticalRounded size={45} className="mt-24" />
          </div>
        </div>

        <div className="h-[100%] w-[18%]  shadow-md shadow-black rounded-3xl flex flex-col justify-between items-center py-4 px-4 box-border">
          <div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              dynamicHeight={true}
              className="max-h-[10vh] w-[100%] rounded-3xl shadow-lg shadow-black"
            >
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%] "
                src="/Assets/images/image1.JPG"
                alt=""
              />
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%]"
                src="/Assets/images/image2.JPG"
                alt=""
              />
            </Carousel>
          </div>

          <div className=" flex justify-between items-center h-[37%] w-[100%]">
            <div className="h-[100%] w-[85%]  flex flex-col items-center justify-evenly">
              <div className="h-[35px] w-[120px] rounded-lg border-2 border-black flex flex-row justify-between items-center mb-1 mr-[60px]">
                <h1 className="text-md ml-1">Level 4</h1>
                <h1 className="h-[23px] w-[30px] rounded-md bg-green-700 mr-1 text-md flex items-center justify-center">
                  3
                </h1>
              </div>
              <h1 className="text-3xl font-bold">Assets</h1>
              <h1 className="text-lg">Aseets of devs-ui</h1>
            </div>
            <BiDotsVerticalRounded size={45} className="mt-24" />
          </div>
        </div>

        <div className="h-[100%] w-[18%]  shadow-md shadow-black rounded-3xl flex flex-col justify-between items-center py-4 px-4 box-border">
          <div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              dynamicHeight={true}
              className="max-h-[10vh] w-[100%] rounded-3xl shadow-lg shadow-black"
            >
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%] "
                src="/Assets/images/image1.JPG"
                alt=""
              />
              <img
                className=" max-h-[35vh] object-fill W-[60vw] rounded-3xl  w-[100%]"
                src="/Assets/images/image2.JPG"
                alt=""
              />
            </Carousel>
          </div>

          <div className=" flex justify-between items-center h-[37%] w-[100%]">
            <div className="h-[100%] w-[85%]  flex flex-col items-center justify-evenly">
              <div className="h-[35px] w-[120px] rounded-lg border-2 border-black flex flex-row justify-between items-center mb-1 mr-[60px]">
                <h1 className="text-md ml-1">Level 4</h1>
                <h1 className="h-[23px] w-[30px] rounded-md bg-green-700 mr-1 text-md flex items-center justify-center">
                  3
                </h1>
              </div>
              <h1 className="text-3xl font-bold">Assets</h1>
              <h1 className="text-lg">Aseets of devs-ui</h1>
            </div>
            <BiDotsVerticalRounded size={45} className="mt-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdpage;
