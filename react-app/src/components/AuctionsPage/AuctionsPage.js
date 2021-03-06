import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { getAuctions } from '../../store/auction';


import './AuctionsPage.css'

const AuctionsPage = () => {
    const dispatch = useDispatch()
    const currentDate = new Date()
    const auctions = useSelector(state => Object.values(state.auction))
    const currentAuctions = auctions.filter(auction => new Date(auction?.end_date).toLocaleDateString('en-US', {timeZone: 'UTC'}) < new Date(currentDate).toLocaleDateString('en-US', {timeZone: 'UTC'}))
    const futureAuctions = auctions.filter(auction => new Date(auction?.start_date).toLocaleDateString('en-US', {timeZone: 'UTC'}) > new Date(currentDate).toLocaleDateString('en-US', {timeZone: 'UTC'}))
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
            <div className='current-auctions-title'>
                <h3 className='auction-title'>Live Auctions</h3>
                <h3 className='auction-title'>Click any of the vehicles below to find more information.</h3>
            </div>
        <div className='auctions-container'>
            {auctions.map(auction => {
                if (auction?.id) {
                    return (
                        <>
                        <div className='auction-listing-container'> 
                            <div className='auction-listing'>
                                <Link key={Math.floor(Math.random() * 10000)} to={`/auctions/${auction.id}`} style={{ textDecoration: 'none'}}>
                                    <img key={Math.floor(Math.random() * 10000)} className='img-main-page' src={auction.img_url_1} alt='img_url_1'></img>
                                    <div className='vehicle-detail-container'>
                                        <h2 key={auction.id} className='auction-details'>{auction.year} {auction.make} {auction.model}</h2>
                                        </div>
                                        <div className='auction-date-container'>
                                            <p className='auction-date-detail'>Auction ends on {new Date(auction.end_date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>
                                        </div>
                                        <div className='auction-location-container'>
                                            <p className='auction-location-detail'>{auction.city}, {auction.state}</p>
                                        </div>
                                </Link>
                            </div>
                        </div>
                        </>
                    )
                }
            })}
        </div>
        {/* <div className='future-auctions-title'>
            <h3 className='auction-title'>Upcoming Auctions</h3>
            <h3 className='auction-title'>Check back in to bid on these vehicles!</h3>
        </div>
        <div className='auctions-container'>
        {futureAuctions.map(auction => {
                if (auction?.id) {
                    return (
                        <>
                        <div className='future-auctions-container'>
                            <div className='auction-listing'>
                                <img key={Math.floor(Math.random() * 10000)} className='img-main-page' src={auction.img_url_1} alt='img_url_1'></img>
                                <h2 key={auction.id} className='auction-details'>{auction.year} {auction.make} {auction.model}</h2>
                                <p className='auction-details'>Auction begins on {new Date(auction.start_date).toLocaleDateString()}</p>
                                
                            </div>
                        </div>
                        </>
                    )
                }
            })}
        </div> */}
        </>
    )
}

export default AuctionsPage