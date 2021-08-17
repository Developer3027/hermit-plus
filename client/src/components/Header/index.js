import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPlus, FaStar, FaMusic } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';

import {
  Nav,
  Logo,
  NavMenu,
  Profile,
  LoginContainer,
  Login
} from './style/header';

function Header() {
  const [userName, setUserName] = useState('Mason');
  const [userPhoto, setUserPhoto] = useState(
    'https://avatars.githubusercontent.com/u/44660994?v=4'
  );

  const signIn = () => {
    console.log('signed in');
  };

  const signOut = () => {
    console.log('signed out');
  };

  return (
    <Nav>
      <Logo src='/images/LogoTV.png' />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to='/'>
              <FaHome className='icon' />
              &nbsp;
              <span>HOME</span>
            </Link>
            <a>
              <FaStar className='icon' />
              &nbsp;
              <span>DASHBOARD</span>
            </a>
            <a>
              <FaSearch className='icon' />
              &nbsp;
              <span>SEARCH</span>
            </a>
            <a>
              <FaPlus className='icon' />
              &nbsp;
              <span>WATCHLIST</span>
            </a>
            <a>
              <RiMovie2Line className='icon' />
              &nbsp;
              <span>VIDEOS</span>
            </a>
            <a>
              <FaMusic className='icon' />
              &nbsp;
              <span>MUSIC</span>
            </a>
          </NavMenu>
          <Profile onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;
