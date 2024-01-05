import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    Validate(email, password);
  };
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <p>{errorMessage}</p>
        <button className="p-4 my-4 w-full bg-red-800" onClick={handleSubmit}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={handleClick}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
