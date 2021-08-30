import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import DeleteAuctionModal from '../DeleteAuctionModal';
import EditAuctionModal from '../EditAuctionModal';
// import EditAuctionForm from '../EditAuctionModal/EditAuctionModal';

function User() {
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const auctions = useSelector(state => Object.values(state.auction))
  const userAuctions = auctions.filter(auction => auction?.user_id === +userId)
  const dispatch = useDispatch();
  const currentDate = new Date()

  useEffect(async () => {
    if (!userId) {
      return;
    }
    await dispatch(getAuctions())
  }, [userId, dispatch]);

  let pastAuctions;
  let currentAuctions;
  if (sessionUser) {
    userAuctions.map(auction => {
      if (new Date(auction.end_date) < new Date(currentDate)) {
        pastAuctions = (
          <>
            <div className='user-auction-listing-past'>
              <h3>{auction.year} {auction.make} {auction.model}</h3>
              <h3>Auction ended on {new Date(auction.end_date).toLocaleDateString()}</h3>
            </div>
          </>
        )
      
    } else if (new Date(auction.end_date) > new Date(currentDate)) {
      currentAuctions = (
        <>
          <div className='user-auction-listing-present'>
            <h3>{auction.year} {auction.make} {auction.model}</h3>
            <div className='edit-delete-buttons'>
              <EditAuctionModal auctionId={auction?.id} />
              <DeleteAuctionModal auctionId={auction?.id} />
            </div>
            <h3>Auction ends on {new Date(auction.end_date).toLocaleDateString()}</h3>
          </div>
        </>
      )
    }
  })

  }

  return (
    <>
      <h3>{sessionUser.first_name} {sessionUser.last_name}</h3>
        <div className='user-auction-container'>
          <div className='current-listings-container'>
            <h3>Current Listings</h3>
              {currentAuctions}
          </div>
          <div className='past-listings-container'>
            <h3>Past Auctions</h3>
            {pastAuctions}
          </div>
        </div>
    </>
  );
}
export default User;
