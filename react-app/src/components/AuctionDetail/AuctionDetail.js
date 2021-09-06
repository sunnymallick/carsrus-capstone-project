import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAuctions } from '../../store/auction';
import { getBids, createBid, cancelBid } from '../../store/bid';
import { getComments, createComment, deleteComment } from '../../store/comment';
import EditAuctionModal from '../EditAuctionModal';
import DeleteAuctionModal from '../DeleteAuctionModal';
import EditCommentModal from '../EditCommentModal';

import './AuctionDetail.css'

const AuctionDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const auction = useSelector(state => state.auction[id])
    const auctionId = auction?.id
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const currentDate = new Date()
    const bids = Object.values(useSelector(state => state.bid))
    const vehicleBids = bids.filter(bid => bid?.auction_id === +id)
    const comments = Object.values(useSelector(state => state.comment))
    const auctionComments = comments.filter(comment => comment?.auction_id === +id)
    const highestBid = vehicleBids.reduce((accum, currentVal) => (accum.bid > currentVal.bid) ? accum: currentVal, 1)
    const [bid, setBid] = useState(highestBid.bid)
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bid > highestBid.bid) {
            const data = await dispatch(createBid(bid, userId, auctionId))
            if (data) {
                await dispatch(getBids())
                setBid(bid)
                alert('Your bid has been placed!')
                history.push(`/auctions/${id}`)
            }
        } else if (highestBid.bid === undefined) {
            const data = await dispatch(createBid(bid, userId, auctionId))
            if (data) {
                await dispatch(getBids())
                setBid(bid)
                history.push(`/auctions/${id}`)
            }
        } else if (bid < highestBid.bid) {
            alert(`Bid must be above the highest bid of $${highestBid.bid}.`)
        } else {
            alert(`Bid must be above the highest bid of $${highestBid.bid}.`)
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
        if (comment) {
            const data = await dispatch(createComment(comment, userId, auctionId))
            if (data) {
                dispatch(getComments())
                setComment('')
            } 

        } else {
            alert('Comment field cannot be empty.')
        }

    }

    const handleCommentDelete = (id) => {
        dispatch(deleteComment(id))
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

    let commentSubmitButton;
    if (sessionUser) {
       
        commentSubmitButton = (
            <button className='bid-comment-submit-edit-delete' type='submit'>Submit Comment</button>   
        )
    } else {
        commentSubmitButton = (
            <p>You need to be logged in to place a comment.</p> 
        )
    }

    let highestBidAnnouncement;
    if (highestBid.bid > 0) {
        highestBidAnnouncement = (
            <h2>The highest bid is currently ${highestBid.bid} by {highestBid.username}!</h2>
        )
    } else {
        highestBidAnnouncement = (
            <h2>This vehicle currently has no bids.</h2>
        )
    }

    return (
        <>
        <div className='auction-container'>
            <div className='image-container'>
                <img className='vehicle-image' src={auction?.img_url_1} alt='img_url_1' />
                <img className='vehicle-image' src={auction?.img_url_2} alt='img_url_2' />
                <img className='vehicle-image' src={auction?.img_url_3} alt='img_url_3' />
                <img className='vehicle-image' src={auction?.img_url_4} alt='img_url_4' />
            </div>
            <div className='auction-details-container'>
            <h1>{auction?.year} {auction?.make} {auction?.model}</h1>
            {sessionUser?.id === auction?.user_id &&
            <>
            <div className='owner-edit-button-container'>
                <p>You can edit or delete your listing here.</p>
                <EditAuctionModal auctionId={auction?.id} />
                <DeleteAuctionModal auctionId={auction?.id} />
            </div>
            </>
            }
                <div className='technical-details-container'>
                    <div className='technical-details'>
                <p>Hosted by: {auction?.username}</p>
                <p>Location: {auction?.city}, {auction?.state}</p>
                <p>Color: {auction?.color}</p>
                <p>Miles: {auction?.miles}</p>
                <p>Tech Specs:</p>
                <p>{auction?.engine}</p>
                <p>{auction?.transmission}</p>
                <p>Auction Begins: {new Date(auction?.start_date).toLocaleDateString('en-US', {timeZone: 'UTC'})} </p>
                <p>Auction Ends: {new Date(auction?.end_date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>
                    </div>
                </div>
            </div>
            <div className='auction-description-container'>
                <h3 className='auction-description'>{auction?.description}</h3>
            </div>
            <div className='bid-container'>
                <form onSubmit={handleSubmit}>
                    <div>
					    {errors?.map((error, ind) => (
						    <div key={ind}>{error}</div>
					    ))}
				    </div>
                    {highestBidAnnouncement}
                        {sessionUser?.id && sessionUser?.id !== auction?.user_id && 
                        <div className='bid-form-container'>
                            <h3>Place your bid here</h3>
                            <input
                                id='bid-input'
                                placeholder='Bid Amount'
                                type='number'
                                name='bid'
                                min='0'
                                onChange={updateBid}
                                value={bid}
                                required={true}></input>
                            <button className='bid-comment-submit-edit-delete' type='submit'>Place Bid</button> 
                        </div>
                        }
                        {!sessionUser?.id &&
                            <p>You must be logged in to place a bid on this vehicle.</p>
                        }
                        {/* {auction?.end_date < current} */}
                </form>
                        <div className='current-bids-container'>
                            <h3>Bid History:</h3>
                            {vehicleBids.map((bid) => {
                                if (bid?.id) {
                                    return (
                                        <>
                                            <div className='current-bid'>
                                                <h3>${bid.bid} on {new Date(bid.created_at).toLocaleDateString()} at {new Date(bid.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} by {bid.username}</h3>
                                                <div className='delete-button-container'>
                                                    {sessionUser?.id === bid?.user_id && bid.bid === highestBid.bid &&
                                                    <>
                                                        <button className='bid-comment-submit-edit-delete' onClick={(e) => handleBidDelete(e, bid.id)}>Cancel Your Bid</button>
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
                 <div className='comments-form'>
                 <form onSubmit={postComment}>
                    <input
                        id='comment-input'
                        type='text'
                        placeholder='Place Comment Here'
                        name='commentArea'
                        value={comment}
                        onChange={updateComment}></input>
                        {commentSubmitButton} 
                 </form>
                </div>      
                 <div className='posted-comments-container'>
                     <h3>User Comments:</h3>
                     {auctionComments.map(comment => {
                         return (
                            <>
                             <h3>{comment?.comment} posted by {comment?.username} on {new Date(comment?.created_at).toLocaleDateString()}</h3>
                             <div className='delete-button-container'>
                                {sessionUser?.id === comment?.user_id &&
                                <>
                                <EditCommentModal commentId={comment?.id}/>
                                <button className='bid-comment-submit-edit-delete' onClick={() => handleCommentDelete(comment.id)}>Delete Comment</button>
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