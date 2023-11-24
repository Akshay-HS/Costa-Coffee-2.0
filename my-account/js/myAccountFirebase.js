import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Initialize Firebase with your configuration
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

function extractNameFromEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex !== -1) {
    return email.substring(0, atIndex);
  }
  return ""; // Return an empty string if '@' is not found
}

// Function to fetch user data from Firebase Authentication
function fetchUserData() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      const { email } = user;
      const name = extractNameFromEmail(email);
      document.getElementById("name").value = name || email || "Anon";
      document.getElementById("email").value = email || "";
    } else {
      // No user is signed in
      console.log("No user signed in.");
    }
  });
}
window.onload = fetchUserData;
