import { useState } from "react";

import FormInput from "../form-imput/form-input.component";
import Button from "../button/button.component";
import {
  signInWithEmailAndPwAuth,
  signInWithGoogle,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormObject = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [form, setForm] = useState(defaultFormObject);
  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPwAuth(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.log(error);
      }
    }
  };

  const googleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button onSubmit={handleSubmit} type="submit">
            Sign in
          </Button>
          <Button type="button" onClick={googleSignIn} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
