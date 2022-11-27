import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBymQDEQ9j2Z5zq_bu3z0EHp412Ki2X5no",
    authDomain: "foodvault-react-auth.firebaseapp.com",
    projectId: "foodvault-react-auth",
    storageBucket: "foodvault-react-auth.appspot.com",
    messagingSenderId: "772668465614",
    appId: "1:772668465614:web:fffab4e6f6aeac54374b9f",
    measurementId: "G-NQC9WDKL8H"
  };

const app = initializeApp(firebaseConfig);
  
export  const auth = getAuth(app)