import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import DeleteAuctionModal from '../DeleteAuctionModal';
import EditAuctionModal from '../EditAuctionModal';
// import EditAuctionForm from '../EditAuctionModal/EditAuctionModal';
import './User.css'

function User() {
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const currentDate = new Date()
  const auctions = useSelector(state => Object.values(state.auction))
  console.log(auctions)
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
      <div className='user-profile-details-container'>
        <h3 className='user-profile-details'>{sessionUser.first_name} {sessionUser.last_name}</h3>
        <h3 className='user-profile-details'>Member since September 2021</h3>
      </div>
            <h2 id='user-profile-header'>Your Listings on Cars 'R' Us</h2>
        <div className='user-auction-container'>
            {userAuctions.map(auction => {
              return (
                <>
                <div className='user-auctions-container'>
                  <div className='user-auction-listing'>
                    <Link to={`/auctions/${auction.id}`} style={{ textDecoration: 'none'}}>
                      <img key={Math.floor(Math.random() * 10000)} className='img-main-page' src={auction.img_url_1} alt='img_url_1'></img>
                      <div className='vehicle-detail-container'>
                        <h3 className='auction-details'>{auction.year} {auction.make} {auction.model}</h3>
                      </div>

                    </Link>
                    <div className='edit-delete-buttons-container'>
                      <div className='edit-delete-buttons'>
                        <EditAuctionModal auctionId={auction?.id} />
                        <DeleteAuctionModal auctionId={auction?.id} />
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )
            })}
          {/* <div className='past-listings-container'>
            <h2>Past Auctions</h2>
            {pastAuctions.map(auction => {
              return (
                <h3>{auction.year} {auction.make} {auction.model}</h3>
              )
            })}
          </div> */}
        </div>
    </>
  );
}
export default User;
