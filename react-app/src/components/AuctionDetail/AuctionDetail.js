import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid } from '../../store/bid';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { auctionId } = useParams()
    const [bid, setBid] = useSelector(0)
    const [errors, setErrors] = useSelector([])
    const auction = useSelector(state => state.auction[auctionId])
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    console.log(auction)
    console.log(userId)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createBid(bid, userId, auctionId ))
    }

    useEffect(() => {
        dispatch(getAuctions())
        dispatch(getBids())
    }, [dispatch])

    const updateBid = (e) => {
        setBid(e.target.value)
    }

    return (
        <>
        <div className='auctions-container'>
            <h1>{auction?.year} {auction?.make} {auction?.model}</h1>
            <div classname='bids-container'>
                <form>
                    <div>
					    {errors?.map((error, ind) => (
						    <div key={ind}>{error}</div>
					    ))}
				    </div>
                        <div className='bid-form-container'>
                            <input
                                className='form-input'
                                placeholder='Bid Amount'
                                type='number'
                                name='bid'
                                onChange={updateBid}
                                value={bid}
                                required={true}></input>
                            <button type='submit'>Place Bid</button> 
                        </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AuctionDetail