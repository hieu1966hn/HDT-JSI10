const init = () => {
  console.log("Window loaded");
  // Import the functions you need from the SDKs you need

  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAX5z0vvKHMxG9Jo4kvaPKEzKBJW2het1I",
    authDomain: "fir-test-fd2ba.firebaseapp.com",
    projectId: "fir-test-fd2ba",
    storageBucket: "fir-test-fd2ba.appspot.com",
    messagingSenderId: "591099878183",
    appId: "1:591099878183:web:54973e199ef25dcd2b6702"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);

}



window.onload = init;