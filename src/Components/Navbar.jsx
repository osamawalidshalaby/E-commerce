// Navbar Component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png';


function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          width="40"
          height="40"
          className="d-inline-block align-text-top"
        />
        <a className="navbar-brand fw-bold text-primary fs-3">TourBooker</a>

        <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><a className="nav-link">Home</a></li>
            <li className="nav-item"><a className="nav-link">Destinations</a></li>
            <li className="nav-item"><a className="nav-link">About</a></li>
            <li className="nav-item"><a className="nav-link">Contact</a></li>
          </ul>
          <button className="btn btn-outline-primary ms-3">Login</button>
          <button className="btn btn-primary ms-2">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;