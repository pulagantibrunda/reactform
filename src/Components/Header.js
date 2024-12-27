import React from 'react';
import image from '../logo.png';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
        <img src={image} alt="Logo" />
        </Link>
      </div>
      <nav className="navitems">
        <Link to="/Electronics">Electronics</Link>
        <Link to="/Home Appliances">Home Appliances</Link>
        <Link to="/Fashion">Fashion</Link>
        <Link to="/Beauty and Personal Care">Beauty & Personal Care</Link>
        <Link to="/Books">Books</Link>
      </nav>
    </header>
  );
}