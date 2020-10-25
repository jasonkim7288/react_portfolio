import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
  return (
    <div id="burger-display">
    <Menu right width={ '280px' } disableAutoFocus>
      <a href="/" id="home" className="menu-item">Home</a>
      <a href="/about" id="about" className="menu-item">About</a>
      <a href="/projects" id="projects" className="menu-item">Projects</a>
      <a href="/contact" id="contact" className="menu-item">Contact</a>
    </Menu>
    </div>
  )
}

export default BurgerMenu;
