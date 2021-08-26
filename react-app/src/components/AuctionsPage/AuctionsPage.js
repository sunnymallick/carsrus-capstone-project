import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuctions } from '../../store/auction';

import './AuctionsPage.css'

const AuctionsPage = () => {
    const dispatch = useDispatch()
    const auctions = useSelector((state) => state.auctions)
    
    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    return (
        <>
        <div className='auctions-container'>
            <h1>This is the Home Page/Main Auction Page</h1>
            <h1>Auctions</h1>
        </div>
        </>
    )
}

export default AuctionsPage