import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './PastAuctions.css'

const PastAuctions = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const currentDate = new Date()
    console.log(currentDate)
    const auctions = useSelector(state => Object.values(state.auction))
    const pastAuctions = auctions.filter(auction => new Date(auction.end_date) > new Date(currentDate))
    console.log(auctions)
    console.log(pastAuctions)
    const images = useSelector(state => state.image)
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            {pastAuctions.map(auction => {
                console.log(auction.end_date)
                return (
                    <h3>{auction.year} {auction.make} {auction.model}</h3>
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