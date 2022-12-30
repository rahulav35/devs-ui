import React, { useContext, useState } from "react";
import Header from "../components/Header";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
import { Result } from "postcss";
import Completed from "../components/Completed";
import Fileaccess from "../components/Fileaccess";
import Fileaccessbutton from "../components/Fileaccessbutton";
import Levels from "../components/Levels";
import Footer from "../components/Footer";
import Tools from "../components/Tools";
import { Usercontext } from "../components/contexts/UserContext";

function Designdetails() {
  const storage = getStorage();

  const [files, setFiles] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  const [figma, setFigma] = useState("");
  const [image, setImage] = useState("");
  const [assets, setAssets] = useState("");
  const [sketch, setSketch] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const { uid } = useContext(Usercontext);

  const handleSubmit = (e, type) => {
    const file = e.target.files[0];
    // console.log(file?.name);
    if (!file) return;
    else {
      // setFiles(file);
      upload(type, file);
    }
  };
  function upload(type, file) {
    setUploading(true);
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImgUrl(downloadURL);
          setUploading(false);
          console.log(downloadURL);
          //   await addDoc(collection(getFirestore(), "designs"), {
          //     name: name,
          //     description: description,
          //     image: downloadURL,
          //   }).then(() => console.log("upload succesfull"));
          // });
          if (type == "image") {
            setImage(downloadURL);
            console.log(image);
          } else if (type == "figma") {
            setFigma(downloadURL);
          } else if (type == "sketch") {
            setSketch(downloadURL);
          } else {
            setAssets(downloadURL);
          }
        });
      }
    );
  }
  const [checkbox, setCheckbox] = useState("");
  const [accessfile, setAccessfile] = useState("");
  const [uploadlist, setUploadlist] = useState([]);
  const [levelbox, setLevelbox] = useState("");
  const [toolbox, setToolbox] = useState([]);
  function Upload(text) {
    if (uploadlist.includes(text)) {
      const newArray = uploadlist.filter((item) => item !== text);
      setUploadlist(newArray);
    } else {
      setUploadlist([...uploadlist, text]);
    }
  }

  function Toolupdate(text) {
    if (toolbox.includes(text)) {
      const toolArray = toolbox.filter((item) => item !== text);
      setToolbox(toolArray);
    } else {
      setToolbox([...toolbox, text]);
    }
  }
  async function Designupload() {
    alert("uploading");
    await addDoc(collection(getFirestore(), "designs"), {
      name: name,
      description: description,
      image: image,
      figma: figma !== (null || "") ? figma : "",
      sketch: sketch !== (null || "") ? sketch : "",
      assets: assets !== null ? assets : "",
      lelel: levelbox,
      tool: toolbox,
      uid: uid,
    }).then(() => console.log("upload succesfull"));
    console.log(image);
    console.log(figma);
    console.log(sketch);
    console.log(assets);
  }

  if (uploading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-start items-center  ">
        <Header />
        <div className="h-[80vh] w-[100vw] flex justify-center items-center">
          <h1 className=" h-[200px] w-[400px] border-2  rounded-lg text-2xl flex justify-center items-center bg-slate-300">
            {" "}
            Uploading {progress}%
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] w-100[vw] flex flex-col justify-center items-center  ml-[50px] pt-14 box-border ">
      <Header />
      <div className="min-h-[70vh] w-[100%] flex flex-col justify-evenly ">
        <h1 className="text-3xl">Upload Design</h1>
        <h1 className="text-xs">* please fill the fields as the given order</h1>
        <input
          className="min-h-[50px] w-[40%]  bg-slate-300  rounded-lg"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="min-h-[150px] w-[40%]  bg-slate-300 rounded-lg"
          type="text"
          onChange={(event) => SetDescription(event.target.value)}
        />
        <h1 className="text-2xl">Upload images in PNG or JPG format</h1>

        <button className=" h-[10%] w-[10%] rounded-lg border-2 text-xl border-blue-700 bg-blue-700 relative">
          <h1> Upload</h1>

          <input
            className="absolute opacity-0first top-0 left-0"
            type="file"
            accept="image/*"
            onChange={(e) => handleSubmit(e, "image")}
          />
        </button>
      </div>
      <div className="min-h-[10vh] w-[50%] flex justify-evenly items-center mr-[740px]">
        <h1 className="text-xl text-fuchsia-800">Completed :</h1>
        <Completed
          value="25%"
          isactive={checkbox === "25%" ? true : false}
          onclick={() => setCheckbox("25%")}
        />
        <Completed
          value="50%"
          isactive={checkbox === "50%" ? true : false}
          onclick={() => setCheckbox("50%")}
        />
        <Completed
          value="75%"
          isactive={checkbox === "75%" ? true : false}
          onclick={() => setCheckbox("75%")}
        />
        <Completed
          value="100%"
          isactive={checkbox === "100%" ? true : false}
          onclick={() => setCheckbox("100%")}
        />
      </div>
      <div className="min-h-[25vh] w-[50%] mr-[650px] flex flex-col justify-around">
        <Fileaccess
          value="Figma file access"
          isclick={uploadlist.includes("Figma file access") ? true : false}
          onclick={() => Upload("Figma file access")}
        />
        <Fileaccess
          value="Sketch file access"
          isclick={uploadlist.includes("Sketch file access") ? true : false}
          onclick={() => Upload("Sketch file access")}
        />
        <Fileaccess
          value="Optimized image access"
          isclick={uploadlist.includes("Optimized image access") ? true : false}
          onclick={() => Upload("Optimized image access")}
        />
      </div>
      <div className="min-h-[10px] w-[50%] mr-[650px] ">
        {uploadlist.includes("Figma file access") && (
          <Fileaccessbutton
            value="Upload figma file"
            onchange={(e) => handleSubmit(e, "figma")}
          />
        )}
        {uploadlist.includes("Sketch file access") && (
          <Fileaccessbutton
            value="Upload sketch file"
            onchange={(e) => handleSubmit(e, "sketch")}
          />
        )}
        {uploadlist.includes("Optimized image access") && (
          <Fileaccessbutton
            value="Upload image assets"
            onchange={(e) => handleSubmit(e, "assets")}
          />
        )}
      </div>
      <div className=" min-h-[10vh] w-[50%] flex justify-evenly items-center mr-[740px]">
        <h1 className="text-xl text-fuchsia-800">Levels :</h1>
        <Levels
          value="1"
          levelclick={levelbox === "1" ? true : false}
          onclick={() => setLevelbox("1")}
        />
        <Levels
          value="2"
          levelclick={levelbox === "2" ? true : false}
          onclick={() => setLevelbox("2")}
        />
        <Levels
          value="3"
          levelclick={levelbox === "3" ? true : false}
          onclick={() => setLevelbox("3")}
        />
        <Levels
          value="4"
          levelclick={levelbox === "4" ? true : false}
          onclick={() => setLevelbox("4")}
        />
      </div>
      <div className=" min-h-[10vh] w-[80%] flex  justify-around items-center mr-[340px] mt-4">
        <h1 className="text-xl text-fuchsia-800">Tools used</h1>
        <Tools
          value={"/Assets/icons/figma.png"}
          name="figma"
          toolselect={toolbox.includes("figma") ? true : false}
          onclick={() => Toolupdate("figma")}
        />
        <Tools
          value={"/Assets/icons/xd.png"}
          name="xd"
          toolselect={toolbox.includes("xd") ? true : false}
          onclick={() => Toolupdate("xd")}
        />
        <Tools
          value={"/Assets/icons/after-effects.png"}
          name="aftereffect"
          toolselect={toolbox.includes("aftereffect") ? true : false}
          onclick={() => Toolupdate("aftereffect")}
        />
        <Tools
          value={"/Assets/icons/illustrator.png"}
          name="illustrator"
          toolselect={toolbox.includes("illustrator") ? true : false}
          onclick={() => Toolupdate("illustrator")}
        />
        <Tools
          value={"/Assets/icons/photoshop.png"}
          name="photoshop"
          toolselect={toolbox.includes("photoshop") ? true : false}
          onclick={() => Toolupdate("photoshop")}
        />
        <Tools
          value={"/Assets/icons/sketch.png"}
          name="sketch"
          toolselect={toolbox.includes("sketch") ? true : false}
          onclick={() => Toolupdate("sketch")}
        />
      </div>
      <button
        onClick={Designupload}
        disabled={
          image == null ||
          assets == null ||
          levelbox == "" ||
          toolbox.length == 0 ||
          name == "" ||
          description == ""
        }
        className="h-[50px] w-[150px] bg-black rounded-lg border-2 border-blue-800 text-white mt-[120px] "
      >
        Upload design
      </button>
      <Footer />
    </div>
  );
}

export default Designdetails;
