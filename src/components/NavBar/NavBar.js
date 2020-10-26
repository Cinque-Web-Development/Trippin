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
              <Link to="/">Search Cities</Link>
            </li>
            <li>
              <Link to={`/user/${user._id}`}>{user.name}'s Trips</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>Log Out</Link>
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
              <Link to="/">Search Cities</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
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
