import { data } from "autoprefixer";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import React, { useContext, useState } from "react";
import Carouselpage from "../../components/Carousel";
import { Usercontext } from "../../components/contexts/UserContext";
import Header from "../../components/Header";
import Profiledetails from "../../components/Profiledetails";
import Link from "next/link";
function Profile() {
  const { user, setUser, uid } = useContext(Usercontext);
  console.log(user);
  const [designtab, setDesigntab] = useState([]);

  return (
    <div className="min-h-[100vh] w-[100vw]  flex flex-col justify-start items-center mt-[5%] overflow-scroll">
      <Header />
      <div className="h-[100%] w-[100%]  flex justify-between items-center">
        <div className="h-[100%] w-[30%]  flex flex-col justify-center items-center">
          <div
            style={{ backgroundImage: `url(${user.photoURL})` }}
            className="h-[170px] w-[170px] border-2 border-black rounded-[100%]"
          ></div>

          <Link
            href={"/Profileedit"}
            className="h-[10%] w-[33%] bg-blue-900 rounded-xl text-lg text-white my-5 flex justify-center items-center"
          >
            <h1> Edit Profile</h1>
          </Link>
          <div className="h-[20%] w-[100%] flex flex-row justify-evenly items-center">
            <div className="h-[100%] w-[33%]  flex flex-col justify-evenly items-center">
              <h1 className="text-xl text-center">Contributions</h1>
              <h2 className="tex-xl text-center"> 0</h2>
            </div>

            <div className="h-[100%] w-[33%]  flex flex-col justify-evenly items-center">
              <h1 className="text-xl text-center">Followers</h1>
              <h2 className="tex-xl text-center"> 0</h2>
            </div>

            <div className="h-[100%] w-[33%]  flex flex-col justify-evenly items-center">
              <h1 className="text-xl text-center">Following</h1>
              <h2 className="tex-xl text-center"> 0</h2>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[39%]    flex flex-col justify-start items-start">
          <h1 className="text-3xl my-2">{user.name}</h1>

          <Profiledetails
            image={"/Assets/lightmode/cv.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/link.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/cv.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/github.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/twitter.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/facebook.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/dribble.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/linkedin.png"}
            text="not available"
          />
          <Profiledetails
            image={"/Assets/lightmode/instagram.png"}
            text="not available"
          />
        </div>
        <div className="h-[100px] w-[30%]    flex flex-col justify-start items-center mb-40 ">
          <Link
            href={"/Designdetails"}
            className="h-[37%] w-[55%] bg-blue-900 rounded-3xl text-md text-white flex justify-center items-center"
          >
            <h1> Upload Design</h1>
          </Link>
        </div>
      </div>

      <div className="h-[470px] w-[100%]  justify-around items-center flex flex-col bg-slate-500 my-4 ">
        <div className="h-[10%] w-[90%] flex justify-around items-center">
          <h1 className="text-sm">My Designs</h1>
          <h1 className="text-sm">Task In Progress</h1>
          <h1 className="text-sm">Task Completed</h1>
        </div>
        <div className="h-[90%] w-[100%] bg-white flex  justify-evenly items-center ">
          <Carouselpage
            level="Level 1"
            levelno="1"
            title="Assets"
            description="First assets"
          />

          <Carouselpage
            level="Level 4"
            levelno="4"
            title="Assets"
            description="Assets of Devs-ui"
          />

          <Carouselpage
            level="Level 3"
            levelno="3"
            title="Dream job finder"
            description="An app to find jobs"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
