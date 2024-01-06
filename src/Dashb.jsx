import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase.config'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Dashb = () => {


  const location = useLocation();
  const user = location.state?.user || {};

    const navigate =useNavigate()
    const handleLogout =(()=>{
        signOut(auth).then((user)=>{
            navigate('/');
            console.log(user)
            
        }).catch((err)=>console.log(err, "err"))
    })
  return (
    <div>
      Dashboard 
      <button onClick={handleLogout}>Logout</button>

      <div>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
      <img src={user.profileImage} alt="Profile" />
      {/* Rest of your dashboard content */}
    </div>
    </div>
  )
}

export default Dashb