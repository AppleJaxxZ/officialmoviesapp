import React from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignIn from "./../../components/SignIn/sign-in.components";
import SignUp from "./../../components/SignUp/sign-up.components";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn className="sign-in-form" />
    <SignUp className="sign-up-form" />
  </div>
);

export default SignInAndSignUp;
