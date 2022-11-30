import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

import { app } from "../config/firebase.config";

export const AuthContext = createContext("User");

const auth = getAuth(app);
const AuthContextProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // Provider
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  // Registration Handler.
  const registerWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const registerWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };
  const registerWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  // Verification Handler
  const VerifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogout = () => {
    return signOut(auth);
  };

  const authContextValue = {
    user,
    loading,
    setUser,
    registerWithGoogle,
    registerWithGithub,
    registerWithEmailAndPassword,
    VerifyEmail,
    userLogin,
    updateUserProfile,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
