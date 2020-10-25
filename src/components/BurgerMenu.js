import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
  return (
    <div id="burger-display">
    <Menu right width={ '280px' } disableAutoFocus>
      <Link to="/" id="home" className="menu-item">Home</Link>
      <Link to="/about" id="about" className="menu-item">About</Link>
      <Link to="/projects" id="projects" className="menu-item">Projects</Link>
      <Link to="/contact" id="contact" className="menu-item">Contact</Link>
    </Menu>
    </div>
  )
}

export default BurgerMenu;
