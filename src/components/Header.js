import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

function Header() {
  return (
    <header class="bg-color">
      <Link>
        <h1 id="title-top">Jason's</h1>
        <h1 id="title-bottom">Portfolio</h1>
      </Link>
    </header>
  );
}

export default Header;
