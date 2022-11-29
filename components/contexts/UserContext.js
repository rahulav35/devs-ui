import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebaseconfig";
export const Usercontext = React.createContext(null);

function Usercontextprovider(props) {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
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
