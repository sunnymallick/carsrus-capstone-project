import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid, cancelBid } from '../../store/bid';
import { getComments, createComment, deleteComment } from '../../store/comment';
import EditAuctionModal from '../EditAuctionModal';
import EditCommentModal from '../EditCommentModal';

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
    const images = auction?.image
    console.log(images)
    const history = useHistory()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createBid(bid, userId, auctionId))

        if (data) {
            dispatch(getBids())
            history.push(`/auctions/${id}`)
        }
    }

    const handleBidDelete = (e, id) => {
        e.preventDefault()
        const cancelled = dispatch(cancelBid(id))
        if (cancelled) {
            alert('Your bid has been cancelled.')
        } 
    }

    const postComment = async (e) => {
        e.preventDefault();
        const data = await dispatch(createComment(comment, userId, auctionId))

        if (data) {
            dispatch(getComments())
        } 
    }

    const handleCommentDelete = (id) => {
        dispatch(deleteComment(id))

        // if (cancelled) {
        //     alert('Your comment has been deleted.')
        //     dispatch(getComments())
        // } 
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
        <div className='auction-container'>
            <h1>{auction?.year} {auction?.make} {auction?.model}</h1>
            {images?.map(image => {
                return (
                    <p>{image.img_url}</p>
                )
            })}
            <h3>{auction?.description}</h3>
            {/* <div className='owner-edit-button-container'>
            {sessionUser?.id === auction?.user_id &&
            <>
                <EditAuctionModal />
            </>
            }
            </div> */}
            <div className='bid-container'>
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
                                                <h3>${bid.bid} on {new Date(bid.created_at).toLocaleDateString()} by {bid.user_id}</h3>
                                                <div className='delete-button-container'>
                                                    {sessionUser?.id === bid?.user_id &&
                                                    <>
                                                        <button className='bid-delete-button' onClick={(e) => handleBidDelete(e, bid.id)}>Cancel Bid</button>
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
                        placeholder='Place Comment Here'
                        name='commentArea'
                        value={comment}
                        onChange={updateComment}></textarea>
                        <button type='submit'>Submit Comment</button>        
                 </form>
                 <div className='posted-comments-container'>
                     <h3>User Comments:</h3>
                     {auctionComments.map(comment => {
                         return (
                            <>
                             <p>{comment?.comment} posted by {comment?.user_id} on {comment?.created_at}</p>
                             <div className='delete-button-container'>
                                {sessionUser?.id === comment?.user_id &&
                                <>
                                <EditCommentModal commentId={comment?.id}/>
                                <button className='comment-delete-button' onClick={() => handleCommentDelete(comment.id)}>Delete Comment</button>
                                </>
                                }
                            </div>
                            </>
                         )
                     })}
                 </div>

             </div>
        </div>
        </>
    )
}

export default AuctionDetail