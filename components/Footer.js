import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const router = useRouter();
  return (
    <footer className="h-[275px] w-[100%]  mt-28 flex flex-row justify-between bg-bgmobileimage bg-cover overflow-x-hidden ">
      <div className="h-[90%] w-[30%]  flex flex-col justify-center items-center">
        <p className=" h-[15%] w-[90%]  text-center text-lg max-w-[85%]">
          abcdefghijklmnopqrstuvwxfgjhkljkj
        </p>
        <p className=" h-[15%] w-[90%]  text-center text-lg max-w-[85%]">
          abcdefghijklmnopqrstuvwx
        </p>
        <p className=" h-[15%] w-[90%]  text-center text-lg max-w-[85%]">
          abcdefghijklmno
        </p>
      </div>

      <div className="h-[100%] w-[40%]  flex justify-around items-center">
        <div className="h-[90%] w-[50%]  flex flex-col justify-around items-center ">
          <h1 className="text-xl font-bold">Explore</h1>
          <h1 onClick={() => router.push("/")} className="text-lg">
            Home
          </h1>
          <h1 className="text-lg">Designs</h1>
          <h1 className="text-lg">Challenges</h1>
        </div>
        <div className="h-[90%] w-[50%]  flex flex-col justify-around items-center ">
          <h1 className="text-xl font-bold">Contact us</h1>
          <h1 className="text-lg">Email us</h1>
          <h1 className="text-lg">Discord</h1>
          <div className="h-[20%] w-[40%] flex justify-around items-center ">
            <img
              className=" h-[38px] w-[38px]"
              src="/Assets/lightmode/twitter.png"
              alt=""
            />
            <img
              className=" h-[38px] w-[38px]"
              src="/Assets/lightmode/instagram.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
