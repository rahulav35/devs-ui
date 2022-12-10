import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebaseconfig";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
export const Usercontext = React.createContext(null);

function Usercontextprovider(props) {
  const [user, setUser] = useState({});
  const [uid, setUid] = useState("");
  const value = { user, setUser };
  const [data, setData] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUid(user.uid);

      const unsubscribe = onSnapshot(
        query(
          collection(getFirestore(), "users"),
          where("email", "==", `${user.email}`)
        ),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        }
      );
      // ...
    } else {
      setUser({});
      // User is signed out
      // ...
    }
  });

  return (
    <Usercontext.Provider value={value}>{props.children}</Usercontext.Provider>
  );
}
export default Usercontextprovider;
