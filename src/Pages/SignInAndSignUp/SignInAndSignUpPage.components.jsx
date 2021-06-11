import React from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignIn from "./../../components/SignIn/sign-in.components";
import SignUp from "./../../components/SignUp/sign-up.components";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
