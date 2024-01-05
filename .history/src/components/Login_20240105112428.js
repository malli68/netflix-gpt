import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80">
        <h1 className="font-bold text-3xl py-4"> {isSignIn ? "Sign In" : "Sign Up"}</h1>
        <input
          type="email"
          placeholder="email"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <button className="p-4 my-4 w-full bg-red-800" >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleClick}>
        {isSignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In"}  </p>
      </form>
    </div>
  );
};

export default Login;
