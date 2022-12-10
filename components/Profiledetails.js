import React from "react";

function Profiledetails({ image, text }) {
  return (
    <div className="h-[7%] w-[50%]  flex justify-start items-center overflow-x-hidden ">
      <img src={image} className="h-[20px] w-[20px] mx-3 my-1" alt="" />
      <h1 className="text-sm">{text}</h1>
    </div>
  );
}

export default Profiledetails;
