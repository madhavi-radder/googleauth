
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
// const analytics = getAnalytics(app);

const firebaseConfig = {
    apiKey: "AIzaSyC5FHy_VK5AwU4TfXqcf4qd6LS41h56Dng",
    authDomain: "fir-test-f624f.firebaseapp.com",
    projectId: "fir-test-f624f",
    storageBucket: "fir-test-f624f.appspot.com",
    messagingSenderId: "869031264036",
    appId: "1:869031264036:web:bd972c8fb4be9d3e5bfdb1",
    measurementId: "G-L0D12J4CB7"
  };

   const app = initializeApp(firebaseConfig);
   const provider = new GoogleAuthProvider();
   const auth = getAuth(app);
   export {auth,provider};
  
