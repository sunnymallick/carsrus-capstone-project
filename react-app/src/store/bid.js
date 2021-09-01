export const LOAD_BIDS = 'bids/LOAD_BIDS';
export const CREATE_BID = 'bids/CREATE_BID';
export const DESTROY_BID = 'bids/DESTROY_BID';

const load = bids => ({
    type: LOAD_BIDS,
    bids
})

const placeBid = bid => ({
    type: CREATE_BID,
    bid
})

const deleteBid = bidId => ({
    type: DESTROY_BID,
    bidId
})

export const getBids = () => async dispatch => {
    const res = await fetch('/api/bids/');

    if (res.ok) {
        const bids = await res.json()
        dispatch(load(bids.bids))
        return res;
    }
}

export const createBid = (bid, userId, auctionId) => async dispatch => {
    const res = await fetch('/api/bids/' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            bid: bid,
            user_id: userId,
            auction_id: auctionId
        })
    })
    
    if (res.ok) {
        const newBid = await res.json();
        dispatch(placeBid(newBid));
        return newBid;
    }
}

export const cancelBid = (id) => async dispatch => {
    const res = await fetch(`/api/bids/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        await res.json();
        dispatch(deleteBid(id))
    }
    return res;
}


let initialState = {}

const bidReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_BIDS: {
            const allBids = {
                ...state,
            };
            action.bids.forEach((bid) => {
                allBids[bid.id] = bid;
            });
            return allBids;
        }
        case CREATE_BID: {
            const newState = {
                ...state,
                [action.bid.id]: action.bids
            }
            return newState
        }
        case DESTROY_BID: {
            const newState = {...state};
                delete newState[action.bidId]
            return newState;
        }
        default:
            return state
    }
}

export default bidReducer;