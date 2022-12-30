import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

function Levels({ value, levelclick, onclick }) {
  return (
    <div className="min-h-[75px] w-[11%] flex flex-col justify-around items-center mt-7">
      <h1 className="text-xl text-bold text-slate-600">{value} </h1>
      <div
        onClick={onclick}
        className="h-[40px] w-[40px] bg-blue-300 rounded-md flex justify-center items-center"
      >
        {levelclick && <HiOutlineCheck size={"40px"} color="darkblue" />}
      </div>
    </div>
  );
}

export default Levels;
