import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}