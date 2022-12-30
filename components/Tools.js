import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

function Tools({ value, onclick, toolselect }) {
  return (
    <div
      onClick={onclick}
      className="min-h-[85px] w-[90px] flex flex-col justify-around items-center mt-7  "
    >
      <div className="h-[16px] w-[16px] bg-blue-400 mr-16 mt-1 mb-1 flex justify-center items-center">
        {toolselect && <HiOutlineCheck size={"25px"} color="black" />}
      </div>
      <img className="rounded-lg" src={value} alt="" />
    </div>
  );
}

export default Tools;
