// Function to toggle between login and signup forms


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInAnonymously,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNb8UHVHcxBf8pZEghlT6tGbGjMeZgnW4",
  authDomain: "costa-coffee-login-and-signup.firebaseapp.com",
  databaseURL:
    "https://costa-coffee-login-and-signup-default-rtdb.firebaseio.com",
  projectId: "costa-coffee-login-and-signup",
  storageBucket: "costa-coffee-login-and-signup.appspot.com",
  messagingSenderId: "12216510271",
  appId: "1:12216510271:web:7b7e41d2291cfede38958a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const provider = new GoogleAuthProvider();

// Signup

const signup = () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const UserName = document.getElementById("signup-name").value;

  set(ref(db, "users/" + UserName), {
    email: email,
  });
  console.log("wriitng to databse Sucessful");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      // You can do something with the 'user' object, e.g., display a success message
      alert("User signed up successfully! Please Login ");
      console.log("User signed up:", user);
      window.location.href = "loginAndSignup.html";
    })
    .catch((error) => {
      // Handle errors during signup
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Signup error: " + errorMessage);
      // You can display an error message or handle it as needed
      console.error("Signup error:", errorCode, errorMessage);
    });
};
document.getElementById("signupButton").addEventListener("click", signup);

const login = () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      // alert("Login successful!");
      // You can perform actions after successful login, e.g., redirect to another page
      console.log("User logged in:", user);
      window.location.href = "../home/index.html";
    })
    .catch((error) => {
      // Handle errors during login
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("loGIN error: " + errorMessage);
      // You can display an error message or handle it as needed
      console.error("Login error:", errorCode, errorMessage);
    });
};

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  login(); // Call the login function when the form is submitted
});

const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      window.location.href = "../home/index.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
document
  .getElementById("googleLoginButton")
  .addEventListener("click", googleLogin);

const anonLogin = () => {
  signInAnonymously(auth)
    .then(() => {
      window.location.href = "../home/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};
document
  .getElementById("anonnLoginButton")
  .addEventListener("click", anonLogin);
const mobileLogin = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        submitPhoneNumberAuth();
      },
    }
  );
  var phoneNumber = document.getElementById("mobileNumber").value;
  var appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
    })
    .catch(function (error) {
      console.log(error);
    });
};
function submitPhoneNumberAuthCode() {
  var code = document.getElementById("otp").value;
  confirmationResult
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      //console.log(user);

      // window.AppInventor.setWebViewString(JSON.stringify(user));
      window.location.href = "../home/index.html";
    })
    .catch(function (error) {
      console.log(error);
      alert("Wrong OTP");
    });
}

document
  .getElementById("mobileLoginButton")
  .addEventListener("click", mobileLogin);
document
  .getElementById("otpSubmmitButton")
  .addEventListener("click", submitPhoneNumberAuthCode);
