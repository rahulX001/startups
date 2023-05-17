import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBEvJhRnLgkMlUNIUYL0m55g3nIM6hbI3s",
  authDomain: "iitbhustartups.firebaseapp.com",
  projectId: "iitbhustartups",
  storageBucket: "iitbhustartups.appspot.com",
  messagingSenderId: "98247085201",
  appId: "1:98247085201:web:8d563a422560d4bd79c330",
  measurementId: "G-E8FFNFZHBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =getFirestore(app);
const storage = getStorage(app);
export {firestore,storage};