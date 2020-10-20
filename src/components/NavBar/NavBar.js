import React from "react";
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
        <Link to="/" id="brand-logo" className="left">
          <img className="trippin-logo" src="/images/trip-logo.png" alt="icon"></img>
          <h1 id="app-name">Trippin'</h1>
          </Link>
          <ul className="right">
            <li>
              <Link to="/">Start Trip</Link>
            </li>
            <li>
              <Link to={`/user/${user._id}`}>Welcome, {user.name}</Link>
            </li>
            <li>
              <a href=" " onClick={handleLogout}>Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
        <Link to="/" id="brand-logo" className="left">
          <img className="trippin-logo" src="/images/trip-logo.png" alt="icon"></img>
          <h1 id="app-name">Trippin'</h1>
          </Link>
          <ul className="right">
            <li>
              <a href="/">Start Trip</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>



  return (
    nav
  );
};

export default NavBar;
