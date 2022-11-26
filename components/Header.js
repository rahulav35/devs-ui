import React from "react";
import { AiOutlineBell } from "react-icons/ai";

function Header() {
  return (
    <div className=" h-[10%] w-[100%] fixed top-0 flex justify-between items-center z-[100]">
      <img
        className=" h-[60%] w-[28%] sm:h-[65%] sm:w-[7%] ml-[10px] "
        src="/Assets/lightmode/logo-light.png"
        alt=""
      />
      <div className=" hidden h-[100%] w-[45%]  sm:flex justify-evenly items-center">
        <h1>Home</h1>
        <h1>Challenges</h1>
        <h1>About Us</h1>
        <AiOutlineBell size={25} />
        <div className="bg-userpic h-[100%] w-[5%] "></div>
      </div>
    </div>
  );
}

export default Header;
