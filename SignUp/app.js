  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword }
   from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyC_XPoz-af1kOsFP2Fypt5WukI82OBMbYE",
    authDomain: "loginauth-bd3a9.firebaseapp.com",
    projectId: "loginauth-bd3a9",
    storageBucket: "loginauth-bd3a9.appspot.com",
    messagingSenderId: "1063190698035",
    appId: "1:1063190698035:web:569c0008cd6818500eab46",
    measurementId: "G-V4GNG2DH85"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

    let btn = document.getElementById("btn");

    btn && btn.addEventListener("click", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");

    console.log(email.value);
    console.log(password.value);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('user created')
        window.location.href = "../BloggingApp/index.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('errorMessage')
        // ..
    });
});