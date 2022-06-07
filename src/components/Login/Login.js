import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";
import LoginSignupForm from "../LoginSignupForm/LoginSignupForm";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <LoginSignupForm
        formHeading={"Sign in"}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        buttonHandle={signIn}
        buttonText={"Create your Amazon Account"}
      />
    </div>
  );
}

export default Login;
