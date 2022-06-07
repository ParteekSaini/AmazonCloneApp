import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import LoginSignupForm from "../LoginSignupForm/LoginSignupForm";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
            navigate("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Password does not match");
    }
  };

  return (
    <div className="signup">
      <LoginSignupForm
        formHeading={"Sign up"}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        buttonHandle={register}
        isSignupForm
        buttonText={"Login Here"}
      />
    </div>
  );
}

export default Signup;
