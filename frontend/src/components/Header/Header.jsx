import { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header id="header">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img className='logoImg' src='../../img/Pets&Me-Transparant.png' alt=''></img>
        <div className='info'>
          <p>Email: Petsandme2022*abc*@gmail.com</p>
          <p>Please remove "*abc*" when sending an email.</p>
        </div>
        <nav id='nav' className={menuOpen ? 'active' : ''}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/price">Price</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}