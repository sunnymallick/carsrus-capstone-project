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
    const futureAuctions = auctions.filter(auction => new Date(auction?.start_date).toLocaleDateString() > new Date(currentDate).toLocaleDateString())
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            <h3>Check out our past listings here.</h3>
            {futureAuctions.map(auction => {
                return (
                    <>
                    <NavLink to={`/auctions/${auction.id}`}>
                    <img className='img-past-auction-page' src={auction.img_url_1} alt='img_url_1'></img>
                    </NavLink>
                    <h3 key={auction?.id}>{auction?.year} {auction?.make} {auction?.model}</h3>
                    </>
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