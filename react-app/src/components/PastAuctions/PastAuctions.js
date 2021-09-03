import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './PastAuctions.css'

const PastAuctions = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const currentDate = new Date()
    const auctions = useSelector(state => Object.values(state.auction))
    const pastAuctions = auctions.filter(auction => (new Date(auction?.end_date).toLocaleDateString() < new Date(currentDate).toLocaleDateString()) && (new Date(auction?.start_date).toLocaleDateString() < new Date(currentDate).toLocaleDateString()))
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            <h3>Check out our past listings here.</h3>
            {pastAuctions.map(auction => {
                return (
                    <h3 key={auction?.id}>{auction?.year} {auction?.make} {auction?.model}</h3>
                )
            })}
            {/* {auctions.map(auction => {
                if (new Date(auction?.end_date) > new Date(currentDate)) {
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
            })} */}
        </div>
        </>
    )
}

export default PastAuctions