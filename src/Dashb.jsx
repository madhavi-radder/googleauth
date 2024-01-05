import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase.config'
import { useNavigate } from 'react-router-dom'

const Dashb = () => {
    const navigate =useNavigate()
    const handleLogout =(()=>{
        signOut(auth).then(()=>{
            navigate('/');
            
        }).catch((err)=>console.log(err, "err"))
    })
  return (
    <div>
      Dashboard 
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashb
