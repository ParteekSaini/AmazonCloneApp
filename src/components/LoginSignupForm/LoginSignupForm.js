import React from "react";
import "./LoginSignupForm.css";
import { Link, useNavigate } from "react-router-dom";

function LoginSignupForm({
  formHeading,
  setEmail,
  setPassword,
  buttonText,
  email,
  password,
  buttonHandle,
  confirmPassword,
  setConfirmPassword,
  isSignupForm,
}) {
  return (
    <div className="loginSignupForm">
      <Link to="/">
        <img
          className="loginSignupForm__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="loginSignupForm__container">
        <h1>{formHeading}</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignupForm && (
            <div>
              <h5>Confirm Password</h5>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            onClick={buttonHandle}
            className="loginSignupForm__signInButton"
          >
            {formHeading}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {isSignupForm && <p>Already have an account</p>}
        <Link to={isSignupForm ? "/login" : "/signup"}>
          <button className="loginSignupForm__registerButton">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginSignupForm;
