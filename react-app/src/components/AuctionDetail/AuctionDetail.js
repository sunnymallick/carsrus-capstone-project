import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    
    return (
        <>
        <div className='auctions-container'>
            <h1>This is an individual auction page</h1>
        </div>
        </>
    )
}

export default AuctionDetail