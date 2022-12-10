import React from "react";
import Firstpage from "../components/Firstpage";
import Header from "../components/Header";
import Secondpage from "../components/Secondpage";
import Thirdpage from "../components/Thirdpage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col justify-center items-center overflow-x-hidden ">
      <Header />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Footer />
    </div>
  );
}

export default Home;
