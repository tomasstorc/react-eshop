import { useState, useContext } from "react";

import FormInput from "../form-imput/form-input.component";
import Button from "../button/button.component";
import {
  signInWithEmailAndPwAuth,
  createUserDocumentFromAuth,
  signInWithGoogle,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormObject = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [form, setForm] = useState(defaultFormObject);
  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInWithEmailAndPwAuth(email, password);
      setCurrentUser(user);
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
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
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
          <Button onSubmit={googleSignIn} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
