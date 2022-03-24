import { initializeApp } from "firebase/app";
import {
  getAuth,
  omAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDoc = await getDoc(userDocRef);
  console.log(userAuth);
  if (!userDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPwAuth = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return signInWithEmailAndPassword(email, password);
};

onAuthStateChanged(auth, (user) => {
  console.log(user);
});
