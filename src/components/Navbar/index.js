import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <ul className='Navbar-ul'>
      <li className='Navbar-li'><NavLink exact className='Navbar-NavLink' activeClassName="Navbar-active" to='/'>Home</NavLink></li>
      <li className='Navbar-li'><NavLink exact className='Navbar-NavLink' activeClassName="Navbar-active" to='/trivial'>Trivial</NavLink></li>
      <li className='Navbar-li'><NavLink exact className='Navbar-NavLink' activeClassName="Navbar-active" to='/score'>Score</NavLink></li>
    </ul>
  )
}

export default Navbar;
