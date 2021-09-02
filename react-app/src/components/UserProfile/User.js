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
  const currentDate = new Date()
  const auctions = useSelector(state => Object.values(state.auction))
  const userAuctions = auctions.filter(auction => auction?.user_id === +userId)
  const pastAuctions = userAuctions.filter(auction => new Date(auction.end_date).toLocaleDateString() < new Date(currentDate).toLocaleDateString())
  const currentAuctions = userAuctions.filter(auction => new Date(auction.end_date).toLocaleDateString() > new Date(currentDate).toLocaleDateString())
  const dispatch = useDispatch();

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
          <div className='current-listings-container'>
            <h2>Current Listings</h2>
            {currentAuctions.map(auction => {
              return (
                <>
                <h3>{auction.year} {auction.make} {auction.model}</h3>
                <div className='edit-delete-buttons'>
                  <EditAuctionModal auctionId={auction?.id} />
                  <DeleteAuctionModal auctionId={auction?.id} />
                </div>
                </>
              )
            })}
          </div>
          <div className='past-listings-container'>
            <h2>Past Auctions</h2>
            {pastAuctions.map(auction => {
              return (
                <h3>{auction.year} {auction.make} {auction.model}</h3>
              )
            })}
          </div>
        </div>
    </>
  );
}
export default User;
