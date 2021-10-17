import React from "react";
import Button from "@mui/material/Button";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
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
    <div>
      <h2>Login page</h2>
      <Button
        variant="contained"
        onClick={() => {
          signUp();
        }}
      >
        Sign up
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Login;
