import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import MENU from '../data/menu'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = e => {
    console.log('handleClick');
    setIsOpen(false);
  };

  const handleStateChange = e => {
    setIsOpen(e.isOpen);
  }

  return (
    <div id="burger-display">
    <Menu isOpen={isOpen} onStateChange={handleStateChange} right width={ '280px' } disableAutoFocus>
      { MENU.map(item =>
          <div key={item.id}>
          <Link to={item.path} id={item.id} className="menu-item" onClick={handleClick}>{item.label}</Link>
          {/* <a href={item.path} className="menu-item" onClick={handleClick}>{item.label}</a> */}
          </div>
        )
      }
    </Menu>
    </div>
  )
}

export default BurgerMenu;
