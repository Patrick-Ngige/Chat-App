import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="profile pic" />
        <span>John</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
