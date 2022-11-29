import React, { useContext } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { app, auth } from "../Firebaseconfig";
import { Usercontext } from "./contexts/UserContext";

function Firstpage() {
  const { user, setUser } = useContext(Usercontext);
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
  return (
    <div className=" h-[100vh] w-[100vw]  bg-bgmobileimage sm:bg-bgimage  flex flex-col sm:flex-row justify-evenly sm:pt-[10%] pt-[-10%] box-border ">
      <div className=" h-[40%] sm:h-[90%] w-[95%] sm:w-[45%] flex flex-col justify-evenly place-items-end sm:items-center ">
        <h1 className=" text-[25px] sm:text-4xl max-w-[76%] sm:max-w-[65%] text-center ">
          {" "}
          A problem well started is a problem half solved
        </h1>
        <img
          className=" h-[55%] sm:h-[75%] w-[70%] sm:w-[90%]"
          src="/Assets/images/illustration desktop.png"
          alt=""
        />
      </div>
      <div className="  h-[40%] sm:h-[100%] w-[95%]  sm:w-[45%] flex flex-col-reverse  sm:flex-col justify-around items-start ml-[10px] sm:ml-0 mt-[-15px] sm:mt-[-20px] ">
        <img
          className=" h-[50%] sm:h-[60%] w-[70%] sm:w-[80%] order-1 sm:order-0"
          src="/Assets/icons/code-illustration.png"
          alt=""
        />
        <h1
          className="  text-[25px] sm:text-4xl max-w-[95%] sm:max-w-[70%] text-left pl-[10px] box-border order-1 sm:order-1
        "
        >
          {" "}
          Build Your Career With Us By Solving Tasks
        </h1>
        <div
          className="h-[15%] sm:h-[9%] w-[83%] sm:w-[70%] mt-5 sm:mt-1 self-center border-2 bblackorder-black rounded-[30px] bg-black flex justify-center items-center order-0 sm:order-2"
          onClick={SignInWithGithub}
        >
          <h1 className="text-white text-[16px]">Authurize with Github</h1>
          <img
            className="h-[65%] sm:h-[57%] w-[7%] sm:w-[5%] ml-2"
            src="/Assets/darkmode/git.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
