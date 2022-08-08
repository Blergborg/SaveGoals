// Context for user auth
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/Firebase/firebaseConfig";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function logIn (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };
  function signUp (email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  function logOut() {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      // navigation here?
    });
    // ??? TODO: this formatting???
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
};

// Custom hook for using the auth context.
export function useUserAuth() {
  return useContext(userAuthContext);
}
