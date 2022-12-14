import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDie63hPREIkNLYg-GwJ7MXaNBZa2XTKRw",
  authDomain: "clone-ada98.firebaseapp.com",
  projectId: "clone-ada98",
  storageBucket: "clone-ada98.appspot.com",
  messagingSenderId: "767308803851",
  appId: "1:767308803851:web:995b4c9fadd0a624d57c0e",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
