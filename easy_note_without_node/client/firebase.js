// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKXBBBX4xAYm-AWg0NSfl1gUPBl25MVoM",
  authDomain: "my-react-app-dev-d7686.firebaseapp.com",
  databaseURL:
    "https://my-react-app-dev-d7686-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-react-app-dev-d7686",
  storageBucket: "my-react-app-dev-d7686.appspot.com",
  messagingSenderId: "547168710919",
  appId: "1:547168710919:web:b238c8903fd722866555a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
