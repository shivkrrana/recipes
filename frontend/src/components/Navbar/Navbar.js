import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"

 function NavbarView() {
  return (
    <header className="test">
        <Link to="/" className="logo">Foods<span>.</span></Link>
        <ul className="navigation">
            <li><Link to="/login">Login</Link></li>
            


        </ul>
    </header>
  )
}

export default NavbarView;