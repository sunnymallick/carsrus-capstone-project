import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import UserLoginModal from '../UserLoginModal';
import UserSignUpModal from '../UserSignUpModal';

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
        <NavLink className='nav' onClick={logoutButton} to='/'>Logout {sessionUser.username}?</NavLink>
        <NavLink to='/form' exact={true}>Sell your Car</NavLink>
        <NavLink to={`/users/${sessionUser.id}`}>Your Profile</NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <UserLoginModal />
        <UserSignUpModal />
      </>
    )
  }
  return (
    <>
      <div className='nav-container'>
        <NavLink to='/' exact={true}>Auctions</NavLink>
        <NavLink to='/past-auctions' exact={true}>Past Auctions</NavLink>
        
        <div className='nav-search'>
          <form>
            <input className='search-input' placeholder='Search for Vehicles'></input>
          </form>
        </div>
        <div className='nav-right'>
          {sessionLinks}
        </div>
      </div>
    </>
  );
}

export default NavBar;
