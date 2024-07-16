// navbar.js
import React from 'react';
import '../NavBar/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div>
        <p className='my-logo'><span className='logo'>Blog Application</span></p>
      </div>
      <div className='menu'>
        <Link className='links' to='/'>Home</Link> {/* Links to different routes */}
        <Link className='links' to='/blog'>Blog</Link>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/contact'>Contact</Link>
        <Link className='links' to='/login'>Login</Link>
      </div>
    </div>
  );
}

export default NavBar;
