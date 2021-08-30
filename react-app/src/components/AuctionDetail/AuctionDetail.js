import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid } from '../../store/bid';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [bid, setBid] = useState(null)
    const [errors, setErrors] = useState([])
    const auction = useSelector(state => state.auction[id])
    const auctionId = auction?.id
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const bids = Object.values(useSelector(state => state.bid))
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createBid(bid, userId, auctionId))

        if (data) {
            alert('Bid successful!')
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const dataDelete = dispatch() 
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
            <div className='bids-container'>
                <form onSubmit={handleSubmit}>
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
                        <div className='current-bids-container'>
                            {bids.map((bid) => {
                                if (bid?.id) {
                                    return (
                                        <>
                                            <div className='current-bid'>
                                                <h3>Current Bids:</h3>
                                                <h3>${bid.bid} on {new Date(bid.created_at).toLocaleDateString()}</h3>
                                            </div>
                                            <div className='delete-button-container'>
                                                {sessionUser.id === bid.user_id &&
                                                <>
                                                    <button className='bid-delete-button' onClick={() => handleDelete(bid.id)}>Cancel Bid</button>
                                                </>
                                                }
                                            </div>
                                        </>
                                    )
                                }
                            })}
                        </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AuctionDetail