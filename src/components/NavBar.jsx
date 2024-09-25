import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  return (
    <header className='navBar'>
        <h1 className='navBar__logo'><Logo /></h1>
      <nav>
        <ul className='navBar__nav'>
          <li className='navBar__nav--link'><NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/'>Accueil</NavLink></li>
          <li className='navBar__nav--link'><NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/a-propos'>A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
