import React from "react";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGoogle();
    console.log(response);
  };
  return (
    <div>
      <h1>I am the sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
