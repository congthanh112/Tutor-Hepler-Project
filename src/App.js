import firebase from "firebase";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import axiosClient from "./api/axiosClient";
import axios from "axios";



axios.interceptors.request.use((config) => {
  const isContentTypeNotSetOrContainsApplicationJson =
      !config.headers ||
      !config.headers['Content-Type'] ||
      config.headers['Content-Type'].includes('application/json');
      config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;  
  if (isContentTypeNotSetOrContainsApplicationJson) {
      config.headers = config.headers || {};
      config.headers['Content-Type'] = 'application/json';
      config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;  
  }
  return config;
});

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;  
//     config.headers
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );






// Configure Firebase.
const config = {
  apiKey: "AIzaSyDefd9qBWYVGTqBlmDoyJHVu9hmlJufT68",
  authDomain: "tutor-helper-6faa2.firebaseapp.com",
  projectId: "tutor-helper-6faa2",
  storageBucket: "tutor-helper-6faa2.appspot.com",
  messagingSenderId: "1083830889210",
  appId: "1:1083830889210:web:2f65739bdbdf07c35b3743",
  measurementId: "G-WLNV3EQDWD",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        const token = firebase.auth().currentUser.getIdToken(true);
        localStorage.setItem("idToken", user.xa);
        axios
          //.post("/auth/sign-in-admin", { apiKey: user.xa}) 
          .post("https://tutorhelper20210920193710.azurewebsites.net/api/v1/auth/sign-in-admin", { idToken: user.xa}) 
          .then(response => {
            //localStorage.setItem("idToken", response.data.idToken);
            console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
            console.log(response.idToken);
            localStorage.setItem("jwtToken", response.data.jwtToken)
          })
        setIsSignedIn(!!user);      
      });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  useEffect(() => {
    const fetchRequest = () => {
        //const response = tutorRequestApi.getAll();
        const response = axios.get( "​​https://tutorhelper20210920193710.azurewebsites.net/api/v1/tutor-requests"

        )
        //setRequest(response.data);
        console.log("AAAAAAAAA"   + response);
    };
    fetchRequest();
}, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Layout}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
