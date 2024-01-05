import React, { useEffect } from "react";
import { auth, provider } from "./firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res, "userdata");
        navigate("/dashb");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(()=>{
    auth.onAuthStateChanged((userdata)=>{
        console.log(userdata)
if(userdata?.email){
    navigate("/dashb");

}
    })
  })

  return (
    <div>
      <button onClick={handleClick}>Login with google</button>
    </div>
  );
};

export default Login;
