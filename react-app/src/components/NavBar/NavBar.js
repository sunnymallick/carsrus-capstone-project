
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
// import LogoutButton from '../auth/LogoutButton';
import UserLoginModal from '../UserLoginModal';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()


  const logout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='nav' onClick={logout} to='/'>Logout {sessionUser.username}?</NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
        <UserLoginModal />
        <NavLink to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
      </>
    )
  }
  return (
    <>
      {sessionLinks}
    </>
  );
}

export default NavBar;
