import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import DeleteAuctionModal from '../DeleteAuctionModal';

function User() {
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const auctions = useSelector(state => Object.values(state.auction))
  const userAuctions = auctions.filter(auction => auction?.user_id === +userId)
  // console.log(userAuctions)
  // console.log(userAuctions)
  const dispatch = useDispatch();
  const currentDate = new Date()

  useEffect(async () => {
    if (!userId) {
      return;
    }
    await dispatch(getAuctions())
  }, [userId, dispatch]);


  return (
    <>
      <h3>{sessionUser.first_name} {sessionUser.last_name}</h3>
        <div className='user-auction-container'>
        
        {userAuctions.map(auction => {
          if (new Date(auction.end_date) < new Date(currentDate)) {
            return (
              <>
                <h3>Past Listings</h3>
                <div className='user-auction-listing-past'>
                  <h3>{auction.year} {auction.make} {auction.model}</h3>
                  <h3>Auction ended on {new Date(auction.end_date).toLocaleDateString()}</h3>
                </div>
              </>
            )
          }
          if (auction?.id) {
            return (
              <>
                <div className='user-auction-listing-present'>
                  <h3>Your Current Listings</h3>
                  <h3>{auction.year} {auction.make} {auction.model}</h3>
                  <div className='edit-delete-buttons'>
                    <DeleteAuctionModal auctionId={auction?.id} />
                  </div>
                  <h3>Auction ends on {new Date(auction.end_date).toLocaleDateString()}</h3>
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
