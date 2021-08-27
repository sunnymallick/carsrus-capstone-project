import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  // const userAuctions = useState((state) => state.auction)

  useEffect(() => {
    if (!userId) {
      return;
    }
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {sessionUser.username}
      </li>
      <li>
        <strong>Email</strong> {sessionUser.email}
      </li>
    </ul>
  );
}
export default User;
