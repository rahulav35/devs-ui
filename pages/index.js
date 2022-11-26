import React from "react";
import Firstpage from "../components/Firstpage";
import Header from "../components/Header";
import Secondpage from "../components/Secondpage";

function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col justify-center items-center ">
      <Header />
      <Firstpage />
      <Secondpage />
    </div>
  );
}

export default Home;
