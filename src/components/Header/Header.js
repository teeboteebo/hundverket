import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <header className="full-padding">
      <NavLink to="/" className="logo-holder">
        <img src="/images/hvis-logo-primary.png" className="logo" alt="Hundverket i Skåne" />
        <img src="/images/ebbe.jpg" className="logo-dog" alt="Pedagoghunden Ebbe" />
      </NavLink>
      <nav>
        <NavLink exact activeStyle={{ opacity: 1 }} className="nav-link" to="/">
          Start
          </NavLink>
        <NavLink activeStyle={{ opacity: 1 }} className="nav-link" to="/lank-1">
          Länk 1 
        </NavLink>
        <NavLink activeStyle={{ opacity: 1 }} className="nav-link" to="/lank-2">
          Länk 2
        </NavLink>
      </nav>
    </header>
  )
}

export default Header