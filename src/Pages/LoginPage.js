import React from "react";
import { Link } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import MyAppBar from "../Components/MyAppBar";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  const auth = getAuth();
  const signUp = () => {
    createUserWithEmailAndPassword(auth, "dd@g.com", "1234enter")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, "dd@g.com", "1234enter")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div styles={styles.pageStye}>
      <MyAppBar />

      <LoginForm />
    </div>
  );
};

const styles = {
  pageStye: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
};

export default LoginPage;
