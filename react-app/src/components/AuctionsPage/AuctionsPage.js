import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './AuctionsPage.css'

const AuctionsPage = () => {
    const dispatch = useDispatch()
    const currentDate = new Date()
    const auctions = useSelector(state => Object.values(state.auction))
    const currentAuctions = auctions.filter(auction => new Date(auction?.end_date).toLocaleDateString() > new Date(currentDate).toLocaleDateString())
    const futureAuctions = auctions.filter(auction => new Date(auction?.start_date).toLocaleDateString() > new Date(currentDate).toLocaleDateString())
    console.log(futureAuctions)

    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
            <div className='current-auctions-title'>
                <h2>Welcome to Cars 'R' Us, a no-reserve auction website for cars and trucks!</h2>
                <h3 className='auction-title'>Live Auctions</h3>
            </div>
        <div className='auctions-container'>
            {currentAuctions.map(auction => {
                if (auction?.id) {
                    return (
                        <>
                            <div className='auction-listing'>
                                <NavLink key={Math.floor(Math.random() * 10000)} to={`/auctions/${auction.id}`}>
                                <img key={Math.floor(Math.random() * 10000)} className='img-main-page' src={auction.img_url_1} alt='img_url_1'></img>
                                <h3 key={auction.id} className='auction-title'>{auction.year} {auction.make} {auction.model}</h3>
                                </NavLink>
                            </div>
                        </>
                    )
                }
            })}
        </div>
        <div className='future-auctions-title'>
            <h3 className='auction-title'>Future Auctions</h3>
        </div>
        <div className='auctions-container'>
        {futureAuctions.map(auction => {
                if (auction?.id) {
                    return (
                        <>
                            <div className='auction-listing'>
                                <NavLink key={Math.floor(Math.random() * 10000)} to={`/auctions/${auction.id}`}>
                                <img key={Math.floor(Math.random() * 10000)} className='img-main-page' src={auction.img_url_1} alt='img_url_1'></img>
                                <h3 key={auction.id} className='auction-title'>{auction.year} {auction.make} {auction.model}</h3>
                                </NavLink>
                            </div>
                        </>
                    )
                }
            })}
        </div>
        </>
    )
}

export default AuctionsPage