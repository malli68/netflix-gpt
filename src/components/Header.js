import { onAuthStateChanged, signOut } from "firebase/auth";
import React,{useEffect} from "react";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import Initialicon from "./reusable/initialIcon";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse")
      }else{
        dispatch(removeUser())
        navigate("/")
      }
    })
    return()=>{
      unsubscribe()
    }
  },[])
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="netflix"
      />
      {user && (
        <div className="flex p-2">
          <img
            src={user?.photoURL}
            alt="userIcon"
            className="w-12 h-12 rounded-3xl"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
