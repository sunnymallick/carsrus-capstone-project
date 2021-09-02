import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './AuctionsPage.css'

const AuctionsPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const currentDate = new Date()
    const auctions = useSelector(state => Object.values(state.auction))
    const currentAuctions = auctions.filter(auction => new Date(auction?.end_date).toLocaleDateString() > new Date(currentDate).toLocaleDateString())

    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
            <div className='auctions-title'>
                <h2>Auctions</h2>
            </div>
        <div className='auctions-container'>
            {auctions.map(auction => {
                if (auction?.id) {
                    return (
                        <>
                            <div className='auction-listing'>
                                <NavLink key={auction.id} to={`/auctions/${auction.id}`}>
                                <h3>{auction.year} {auction.make} {auction.model}</h3>
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