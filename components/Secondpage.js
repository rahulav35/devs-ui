import React from "react";

function Secondpage() {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-evenly items-center pt-[20%] sm:pt-[9%]overflow-x-hidden ">
      <div className="h-[15%] sm:h-[30%] w-[94%]  rounded-[20px] bg-discordcolor overflow-hidden flex flex-col justify-evenly items-center relative">
        <img
          className="h-[100%] sm:h-[250%] w-[100%] sm:w-[45%] object-cover "
          src="/Assets/images/discord.png"
          alt=""
        />
        <h1 className=" absolute bottom-2 text-xl text-white font-bold hidden sm:flex">
          Connect with 1000+ people through Discord
        </h1>
      </div>
      <div className="h-[74%] w-[100%]  flex flex-col sm:flex-row justify-evenly items-center mt-0 sm:mt-20">
        <div className="h-[80%]sm:h-[70%] w-[55%] sm:w-[25%]  flex flex-col justify-evenly items-center ">
          <img
            className="h-[55%]sm:h-[50%] w-[30%]"
            src="/Assets/lightmode/choose-icon.png"
            alt=""
          />
          <h1 className="  sm:text-2xl text-xl  max-w-[100%] sm:max-w-[60%] text-center">
            Choose your topic or design from us
          </h1>
        </div>
        <div className=" h-[80%]sm:h-[70%] w-[55%] sm:w-[25%]  flex flex-col justify-evenly items-center ">
          <img
            className="h-[50%] w-[50%]"
            src="/Assets/lightmode/design-dev.png"
            alt=""
          />
          <h1 className="  text-xl  sm:text-2xl sm:max-w-[100%] text-center">
            Develop or design your item
          </h1>
        </div>
        <div className="h-[80%]sm:h-[70%] w-[55%] sm:w-[25%]   flex flex-col justify-evenly items-center ">
          <img
            className="h-[50%] w-[30%]"
            src="/Assets/lightmode/publish-icon.png"
            alt=""
          />
          <h1 className=" text-xl  sm:text-2xl sm:max-w-[100%] text-center">
            Publish on our site and support others
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
