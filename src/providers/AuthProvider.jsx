import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "./../firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout user

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //google singIn method 1
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleAuthProvider);
  };

  // user  observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // USER OBSERVE
      //console.log(" observer  current user", currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    auth,
    createUser,
    logout,
    loginUser,
    user,
    loading,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
