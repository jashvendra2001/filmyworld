// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyDUp-obHswrT-MJoCBgM2D-tjtqlRJ1Rhg",
  authDomain: "movi-23f8c.firebaseapp.com",
  projectId: "movi-23f8c",
  storageBucket: "movi-23f8c.appspot.com",
  messagingSenderId: "308545954617",
  appId: "1:308545954617:web:41f2abb53af89a25f1bee8"
};




const app = initializeApp(firebaseConfig);



export const db=getFirestore(app);
export const moviRef=collection(db,"movi"); 
export default app;


