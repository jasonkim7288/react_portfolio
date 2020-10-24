import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/MainMenu.scss';

function MainMenu({location}) {

  console.log('location:', location);

  let menu = [
    {
      label: 'Home',
      path: '/',
      isCurrent: false
    },
    {
      label: 'About',
      path: '/about',
      isCurrent: false
    },
    {
      label: 'Projects',
      path: '/projects',
      isCurrent: false
    },
    {
      label: 'Contact',
      path: '/contact',
      isCurrent: false
    },
  ];

  return (
      <nav class="right-nav">
        {menu.map(item =>
          <div class="btn-wrapper">
            <Link to={item.path} class={`menu-string ${item.isCurrent ? 'cur-category' : ''}`}>{item.label}</Link>
            <div class="underscore"></div>
          </div>
        )}
      </nav>
  );
}

export default MainMenu;