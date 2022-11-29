import React, { useContext, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { Usercontext } from "./contexts/UserContext";
import { signOut, getAuth } from "firebase/auth";

function Header() {
  const [visible, setVisible] = useState(false);
  const { user, setUser } = useContext(Usercontext);

  async function Logout() {
    const auth = getAuth();
    auth.signOut().then(() => {
      setUser({});
    });
    // await signOut().then(() => {
    //   setUser({});
    // });
  }
  return (
    <div className=" h-[10%] w-[100%] fixed top-0 flex justify-between items-center z-[100]">
      <img
        className=" h-[60%] w-[28%] sm:h-[65%] sm:w-[7%] ml-[10px] "
        src="/Assets/lightmode/logo-light.png"
        alt=""
      />
      <div className=" hidden h-[100%] w-[45%]  sm:flex justify-evenly items-center relative">
        <h1>Home</h1>
        <h1>Challenges</h1>
        <h1>About Us</h1>
        <AiOutlineBell size={25} />
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          style={{
            backgroundImage: `url(${
              user.photoURL ?? "/Assets/images/default.png"
            })`,
          }}
          className="bg-no-repeat bg-cover bg-center rounded-[100%] h-[40px] w-[40px]  "
        >
          {visible && (
            <div className="fixed h-[15%] w-[15vw] bg-white rounded-lg boder-2 border-black right-16  top-16 flex flex-col justify-evenly items-center">
              <div className="h-[50%] w-[90%]  flex flex-row justify-between items-center">
                <img
                  className="h-[70%] w-[17%]"
                  src="/Assets/lightmode/home(1).png"
                  alt=""
                />
                <h1 className="text-lg">Home</h1>
              </div>

              <div className="h-[50%] w-[90%]  flex flex-row justify-between items-center">
                <img
                  className="h-[70%] w-[17%]"
                  src="/Assets/lightmode/log-out.png"
                  alt=""
                />
                <h1 onClick={Logout} className="text-lg">
                  Log In
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
