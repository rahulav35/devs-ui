import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

function Fileaccess({ value, isclick, onclick }) {
  return (
    <div
      onClick={onclick}
      className="h-[25%] w-[40%]  flex flex-row  justify-start items-center"
    >
      <div className="h-[38px] w-[38px] bg-orange-600 rounded-full  flex justify-center items-center mr-3">
        {isclick && <HiOutlineCheck size={"45px"} color="lightblue" />}
      </div>
      <h1 className="text-lg text-blue-600">{value}</h1>
    </div>
  );
}

export default Fileaccess;
