import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar ' style={{
      borderBottom:"1px solid #fff"
    }}>
        <Link to="">Home </Link>
        <Link to="register">register</Link>
        <Link to="login">login</Link>
    </nav>
  )
}

export default NavBar