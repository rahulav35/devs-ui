import React, { useContext, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { Usercontext } from "./contexts/UserContext";

import {
  signOut,
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { auth } from "../Firebaseconfig";

function Header() {
  const [visible, setVisible] = useState(false);
  const { user, setUser } = useContext(Usercontext);
  const router = useRouter();

  async function SignInWithGithub() {
    // const auth = getAuth();

    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const docRef = await addDoc(collection(getFirestore(), "users"), {
        email: result.user.email,
        name: result.user.displayName ?? "",
        bio: "",
        contributions: 0,
        photoURL: result.user.photoURL ?? "",
        role: "",
        linkedin: "",
        twitter: "",
        instagram: "",
        website: "",
        github: "",
        facebook: "",
      });
      console.log(result.user.displayName);
      const Userdoc = doc(getFirestore(), "users", `${docRef.id}`);

      const unsub = onSnapshot(Userdoc, (doc) => {
        setUser(doc.data());
      });
    });
  }

  async function Logout() {
    const auth = getAuth();
    auth.signOut().then(() => {
      setUser({});
      router.push("/");
    });
    // await signOut().then(() => {
    //   setUser({});
    // });
  }
  return (
    <div className=" h-[10%] w-[100%] fixed top-0 flex justify-between items-center z-[100] backdrop-blur-lg overflow-x-hidden ">
      <img
        className=" h-[60%] w-[28%] sm:h-[65%] sm:w-[7%] ml-[10px] "
        src="/Assets/lightmode/logo-light.png"
        alt=""
      />
      <div className=" hidden h-[100%] w-[45%]  sm:flex justify-evenly items-center relative">
        <h1 onClick={() => router.push("/")}>Home</h1>
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
          className="bg-no-repeat bg-cover bg-center rounded-[100%] h-[40px] w-[40px]"
        >
          {/* {visible && ( */}
        </div>
      </div>
      <div className="fixed right-16  top-16 h-[18vh] w-[15vw] bg-white rounded-lg boder-2 border-black  flex flex-col justify-evenly items-center">
        <div className="h-[50%] w-[90%]  flex flex-row justify-between items-center">
          <img
            className="h-[60%] w-[15%]"
            src="/Assets/lightmode/home(1).png"
            alt=""
          />
          <h1 className="text-lg">Home</h1>
        </div>

        {user.email && (
          <div
            onClick={() => router.push("/profile")}
            className="h-[50%] w-[90%]  flex flex-row justify-between items-center"
          >
            <img
              className="h-[60%] w-[15%]"
              src="/Assets/lightmode/log-out.png"
              alt=""
            />
            <h1 className="text-lg">Profile</h1>
          </div>
        )}

        <div
          onClick={user.email ? Logout : SignInWithGithub}
          className="h-[50%] w-[90%]  flex flex-row justify-between items-center"
        >
          <img
            className="h-[60%] w-[15%]"
            src="/Assets/lightmode/user.png"
            alt=""
          />
          <h1 className="text-lg">{user.email ? "Log Out" : "Log In"}</h1>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Header;
