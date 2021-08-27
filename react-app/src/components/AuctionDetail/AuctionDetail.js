import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const auction = useSelector(state => state.auction[id])
    console.log(auction)
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            <h1>{auction.year} {auction.make} {auction.model}</h1>
        </div>
        </>
    )
}

export default AuctionDetail