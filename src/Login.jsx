import React, { useEffect } from "react";
import { auth, provider } from "./firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user, "userdata");
        // navigate("/dashb");
        const userData = {
          username: res.user.displayName,
          email: res.user.email,
          mobileNumber: res.user.phoneNumber,  // You may get mobile number from the authentication provider
          profileImage: res.user.photoURL,
        };
  
        // Pass user information as state
        navigate("/dashb", { state: { user: userData } });
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