import React, { useContext } from "react";
import { Usercontext } from "../../components/contexts/UserContext";
import Header from "../../components/Header";
import Profiledetails from "../../components/Profiledetails";

function Profile() {
  const { user, setUser } = useContext(Usercontext);
  console.log(user);

  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-start items-center mt-[5%] overflow-scroll">
      <Header />
      <div className="h-[60%] w-[100%]  flex justify-between items-center">
        <div className="h-[100%] w-[30%]  flex flex-col justify-center items-center">
          <div
            style={{ backgroundImage: `url(${user.photoURL})` }}
            className="h-[170px] w-[170px] border-2 border-black rounded-[100%]"
          ></div>
          <button className="h-[10%] w-[33%] bg-blue-900 rounded-xl text-lg text-white my-5">
            Edit Profile
          </button>
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
        <div className="h-[100%] w-[30%]   flex flex-col justify-start items-end ">
          <button className="h-[10%] w-[65%] bg-blue-900 rounded-xl text-md text-white mt-5 mr-5">
            Upload Design
          </button>
        </div>
      </div>

      <div className="h-[10%] w-[100%]  flex justify-around items-center">
        <h1 className="text-sm">My Designs</h1>
        <h1 className="text-sm">Task In Progress</h1>
        <h1 className="text-sm">Task Completed</h1>
      </div>
    </div>
  );
}

export default Profile;
