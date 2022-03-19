import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTZJE860BtbXzbWTBLKigsxq-vnQ-IGx0",
  authDomain: "tom-react-app.firebaseapp.com",
  projectId: "tom-react-app",
  storageBucket: "tom-react-app.appspot.com",
  messagingSenderId: "168112401198",
  appId: "1:168112401198:web:ba8ab3d1970f1cdf6568bf",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
