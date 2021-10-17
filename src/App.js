import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "piccap-a9b13.firebaseapp.com",
  projectId: "piccap-a9b13",
  storageBucket: "piccap-a9b13.appspot.com",
  messagingSenderId: "126563`526158",
  appId: "1:126563526158:web:c439a24c7a361c8ee47e5f",
  measurementId: "G-DTXBW7RZPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  const auth = getAuth();
  const [signedIn, setSignedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setSignedIn(true); // ...
    } else {
      setSignedIn(false);
      // User is signed out
    }
  });
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/about">
            <AboutPage /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
