import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

function Header() {
  const headerMargin = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    // console.log('header.current.clientHeight:', header.current.clientHeight);
    headerMargin.current.style.height = '75px';
  }, []);

  return (
    <header>
      <div id="header" ref={ header }>
        <Link to="/">
          <h1 id="title-top">Jason's</h1>
          <h1 id="title-bottom">Portfolio</h1>
        </Link>
      </div>
      <div ref={ headerMargin }>
      </div>
    </header>
  );
}

export default Header;
