import React, { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi";

function Completed({ value, isactive, onclick }) {
  return (
    <div
      onClick={onclick}
      className="h-[55%] w-[11%] flex flex-col justify-evenly items-center"
    >
      <h1 className="text-xl text-bold text-slate-600"> {value} </h1>
      <div className="h-[50%] w-[80%] bg-blue-300 rounded-md flex justify-center items-center">
        {isactive && <HiOutlineCheck size={"40px"} color="darkblue" />}
      </div>
    </div>
  );
}

export default Completed;
