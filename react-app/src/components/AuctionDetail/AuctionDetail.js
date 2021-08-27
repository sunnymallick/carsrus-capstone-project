import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids } from '../../store/bid';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const auction = useSelector(state => state.auction[id])
    const sessionUser = useSelector(state => state.session.user)

    console.log(auction)
    
    useEffect(() => {
        dispatch(getAuctions())
        dispatch(getBids())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            <h1>{auction?.year} {auction?.make} {auction?.model}</h1>
            <div classname='bids-container'>
                
            </div>
        </div>
        </>
    )
}

export default AuctionDetail