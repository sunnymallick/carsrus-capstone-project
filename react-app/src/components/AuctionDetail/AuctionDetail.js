import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid, cancelBid } from '../../store/bid';
import EditAuctionModal from '../EditAuctionModal';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [bid, setBid] = useState(0)
    const [errors, setErrors] = useState([])
    const auction = useSelector(state => state.auction[id])
    const auctionId = auction?.id
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const bids = Object.values(useSelector(state => state.bid))
    const vehicleBids = bids.filter(bid => bid?.auction_id === +id)
    console.log(vehicleBids)
    const history = useHistory()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createBid(bid, userId, auctionId))

        if (data) {
            alert('Bid successful!')
        }
    }

    const handleDelete = (id) => {
        const cancelled = dispatch(cancelBid(id))

        if (cancelled) {
            alert('Your bid has been cancelled.')
        }
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
            <h3>{auction?.description}</h3>
            {/* <div className='owner-edit-button-container'>
            {sessionUser?.id === auction?.user_id &&
            <>
                <EditAuctionModal />
            </>
            }
            </div> */}
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
                </form>
                        <div className='current-bids-container'>

                            <h3>Bid History:</h3>
                            {vehicleBids.map((bid) => {
                                if (bid?.id) {
                                    return (
                                        <>
                                            <div className='current-bid'>
                                                <h3>${bid.bid} on {new Date(bid.created_at).toLocaleDateString()}</h3>
                                                <div className='delete-button-container'>
                                                    {sessionUser.id === bid.user_id &&
                                                    <>
                                                        <button className='bid-delete-button' onClick={() => handleDelete(bid.id)}>Cancel Bid</button>
        
                                                    </>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            })}
                    </div>
             </div>
        </div>
        </>
    )
}

export default AuctionDetail