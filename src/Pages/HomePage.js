import React from "react";
import Button from "@mui/material/Button";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const auth = getAuth();
  const signOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Button
        variant="contained"
        onClick={() => {
          signOut();
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default HomePage;
