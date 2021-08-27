import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

function User() {
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const auctions = useSelector(state => Object.values(state.auction))
  const userAuctions = auctions.filter(auction => auction?.user_id === +userId)
  console.log(userAuctions)
  // console.log(userAuctions)
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!userId) {
      return;
    }
    await dispatch(getAuctions())
  }, [userId]);

  return (
    <>
      <h3>{sessionUser.first_name} {sessionUser.last_name}</h3>
        <div className='user-auction-container'>
        <h3>Your listings</h3>
        {userAuctions.map(auction => {
          if (auction?.id) {
            return (
              <>
                <div className='user-auction-listing'>
                  <h3>{auction.year} {auction.make} {auction.model}</h3>
                </div>
              </>
            )
          }
        })}
        </div>
    </>
  );
}
export default User;
