import React from 'react';
import { Link } from 'react-router-dom';  
import Buttons from '../Button/Buttons';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='logo'>
          Panda Token
        </Link>
        
        <Link to='/about' className='btn-link'>
          <Buttons>Smart Contract</Buttons>
        </Link>
       
      </nav>
  )
}

export default Header;