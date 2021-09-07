import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const UserLoginForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()


  

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data) {
      setErrors(data);
    }
    if (user) {
      setShowModal(false)
    }
  };

  const demoUser = async (e) => {
    e.preventDefault()
    let demoLogin = 'demo@user.com';
    let demoPass = 'password';
    const demo = await dispatch(login(demoLogin, demoPass))
      if (demo) {
        setShowModal(false)
        history.push('/')
      }
  }

  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/auctions' />;
  }

  return (
    <div className='form-container'>
    <form onSubmit={onLogin}>
      <div className='error-container'>
        {errors.map((error, ind) => (
          <div className='errors' key={ind}>{error}</div>
        ))}
      </div>
      <div className='login-form-label'>
        {/* <label htmlFor='email'>Email</label> */}
        <input
          className='form-input'
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          required={true}
        />
      </div>
      <div className='login-form-label'>
        {/* <label htmlFor='password'>Password</label> */}
        <input
          className='form-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required={true}
        />
      </div>
      <div className='submit-login-form'>
        <button className='bid-comment-submit-edit-delete' type='submit'>Login</button>
      </div>
      <div className='submit-login-form'>
          <button className='bid-comment-submit-edit-delete' type='submit' onClick={demoUser}>Demo Cars 'R' Us</button>
      </div>
    </form>
    </div>
  );
};

export default UserLoginForm;
