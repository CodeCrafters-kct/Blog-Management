import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar' style={{
      borderBottom: "4px solid #000"
    }}>
      <h4><Link to="">Home </Link></h4>
      <h4><Link to="register">Register</Link></h4>
      <h4><Link to="login">Login</Link></h4>
    </nav>
  )
}

export default NavBar