import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid, cancelBid } from '../../store/bid';
import { getComments, createComment } from '../../store/comment';
import EditAuctionModal from '../EditAuctionModal';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [bid, setBid] = useState(0)
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState([])
    const auction = useSelector(state => state.auction[id])
    const auctionId = auction?.id
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const bids = Object.values(useSelector(state => state.bid))
    const vehicleBids = bids.filter(bid => bid?.auction_id === +id)
    const comments = Object.values(useSelector(state => state.comment))
    const auctionComments = comments.filter(comment => comment?.auction_id === +id)
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

    const postComment = async (e) => {
        e.preventDefault();
        const data = await dispatch(createComment(comment, userId, auctionId))

        if (data) {
            alert('Your comment has been posted.')
        }
    }

    useEffect(() => {
        dispatch(getAuctions())
        dispatch(getComments())
        dispatch(getBids())
    }, [dispatch])

    const updateBid = (e) => {
        setBid(e.target.value)
    }

    const updateComment = (e) => {
        setComment(e.target.value)
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
                                                    {sessionUser?.id === bid?.user_id &&
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
             <div className='comments-container'>
                 <form onSubmit={postComment}>
                    <textarea
                        className='form-input'
                        placeholder='comment'
                        name='commentArea'
                        value={comment}
                        onChange={updateComment}></textarea>
                        <button type='submit'>Submit Comment</button>        
                 </form>
                 <div className='posted-comments-container'>
                     <h3>User Comments:</h3>
                     {auctionComments.map(comment => {
                         return (
                             <p>{comment?.comment} posted by {comment?.user_id} on {comment?.created_at}</p>
                         )
                     })}
                 </div>

             </div>
        </div>
        </>
    )
}

export default AuctionDetail