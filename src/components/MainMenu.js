import React, { useRef, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import '../stylesheets/MainMenu.scss';

function MainMenu() {
  const nav = useRef(null);
  const navMargin = useRef(null);
  const location = useLocation();
  console.log('location.pathname:', location.pathname);

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

  menu.find(item => item.path === location.pathname).isCurrent = true;

  const handleResize = e => {
    navMargin.current.style.height = nav.current.clientHeight + 'px';
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div id="right-nav" ref={nav}>
        { menu.map(item =>
            <div className="btn-wrapper" key={item.label}>
              <Link to={item.path} className={`menu-string ${item.isCurrent ? 'cur-category' : ''}`}>{item.label}</Link>
              <div className="underscore"></div>
            </div>
          )
        }
      </div>
      <div ref={navMargin}></div>
    </nav>
  );
}

export default MainMenu;