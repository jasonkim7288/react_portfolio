import React, { useRef, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import MENU from '../data/menu'

function MainMenu() {
  const nav = useRef(null);
  const navMargin = useRef(null);
  const location = useLocation();
  console.log('location.pathname:', location.pathname);

  MENU.find(item => item.path === location.pathname).isCurrent = true;

  const handleResize = e => {
    navMargin.current.style.height = nav.current.clientHeight + 'px';
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-color">
      <div id="right-nav" ref={nav}>
        { MENU.map(item =>
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