
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import UserLoginModal from '../UserLoginModal';
import UserSignUpModal from '../UserSignUpModal';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()


  const logoutButton = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='nav' onClick={logoutButton} to='/'>Logout {sessionUser.username}?</NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
        <UserLoginModal />
        <UserSignUpModal />
      </>
    )
  }
  return (
    <>
      <div className='nav-container'>
        <NavLink to='/auctions' exact={true}>Auctions</NavLink>
      
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
