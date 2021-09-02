import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import UserLoginModal from '../UserLoginModal';
import UserSignUpModal from '../UserSignUpModal';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()


  const logoutButton = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='nav' to='/form' exact={true}>Sell Your Car</NavLink>
        <NavLink className='nav' to={`/users/${sessionUser.id}`}>Your Profile</NavLink>
        <NavLink className='nav' onClick={logoutButton} to='/'>Logout {sessionUser.username}?</NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <div className='login-signup'>
        <UserLoginModal />
        <UserSignUpModal />
      </div>
    )
  }
  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <NavLink className='nav' to='/' exact={true}>Auctions</NavLink>
          <NavLink className='nav' to='/past-auctions' exact={true}>Past Auctions</NavLink>
        </div>
        
        {/* <div className='nav-search'>
          <form>
            <input className='search-input' placeholder='Search for Vehicles'></input>
          </form>
        </div> */}
        <div className='nav-right'>
          {sessionLinks}
        </div>
      </div>
    </>
  );
}

export default NavBar;
