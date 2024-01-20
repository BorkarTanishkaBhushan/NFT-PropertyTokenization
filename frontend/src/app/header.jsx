import React from 'react';
import "./globals.css";
import Image from "next/image";


const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">

        <a href="#" className="logo">
        <img
              src="../images/hero-bg.jpg"
              className="w-10 h-10 "
            /> Realvine
        </a>

        <nav className="navbar container" data-navbar>
          <ul className="navbar-list">

            <li>
              <a href="#" className="navbar-link" data-nav-link>Home</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>Buy</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>Sell</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>Listing</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>About Us</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>
        </nav>

        <a href="/login" className="btn btn-secondary">Signup</a>

        <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true" className="menu-icon"></ion-icon>
          <ion-icon name="close-outline" aria-hidden="true" className="close-icon"></ion-icon>
        </button>

      </div>
    </header>
  );
}

export default Header;
