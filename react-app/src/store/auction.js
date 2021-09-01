export const LOAD_AUCTIONS = 'auctions/LOAD_AUCTIONS';
export const CREATE_AUCTION = 'auctions/CREATE_AUCTION';
export const UPDATE_AUCTION = 'auctions/UPDATE_AUCTION';
export const DESTROY_AUCTION = 'auctions/DESTROY_AUCTION';

const load = auctions => ({
    type: LOAD_AUCTIONS,
    auctions
})

const addOneAuction = auction => ({
    type: CREATE_AUCTION,
    auction
})

const removeAuction = auctionId => ({
    type: DESTROY_AUCTION,
    auctionId
})


export const getAuctions = () => async dispatch => {
    const res = await fetch('/api/auctions/');

    if (res.ok) {
        const auctions = await res.json();
        dispatch(load(auctions.auctions));
        return res;
    }
}

export const getOneAuction = (id) => async dispatch => {
    const res = await fetch(`/api/auctions/${id}`);

    const auction = await res.json();
    if (res.ok) {
        dispatch(addOneAuction(auction));
    }
};

export const createAuction = (userId, vin, year, make, model, type, city, state, description, miles, color, engine, transmission, imgUrl1, imgUrl2, imgUrl3, imgUrl4, startDate, endDate) => async dispatch => {
    const res = await fetch('/api/auctions/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: userId,
            vin: vin,
            year:year,
            make: make,
            model: model,
            type: type,
            city: city,
            state: state,
            description: description,
            miles: miles,
            color: color,
            engine: engine,
            transmission: transmission,
            img_url_1: imgUrl1,
            img_url_2: imgUrl2,
            img_url_3: imgUrl3, 
            img_url_4: imgUrl4,   
            start_date: startDate,
            end_date: endDate,
        })
    })

    if (res.ok) {
        const newAuction = await res.json();
        dispatch(addOneAuction(newAuction))
        return newAuction;
    }
}

export const editAuction = (auctionId, description) => async dispatch => {
    const res = await fetch(`/api/auctions/${auctionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: auctionId,
            description: description
        })
    });
    const editedAuction = await res.json();
    if (res.ok) {
        dispatch(addOneAuction(editedAuction))
    }
    return editedAuction;
}

export const destroyAuction = auctionId => async dispatch => {
    const deleted = await fetch(`/api/auctions/${auctionId}`, {
        method: 'DELETE'
    });
    if (deleted) {
        dispatch(removeAuction(auctionId))
        return deleted;
    }
};

let initialState = {}

const auctionReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_AUCTIONS: {
            const allAuctions = {
                ...state,
            };
            action.auctions.forEach((auction) => {
                allAuctions[auction.id] = auction;
            });
            return allAuctions;
        }
        case CREATE_AUCTION: {
            const newState = {
                ...state,
                [action.auctions?.id]: action.auctions
            }
            return newState
        }
        case DESTROY_AUCTION: {
            const newState = {...state};
            delete newState[action.auctionId]

            return newState;
        }
        default:
            return state
    }
}

export default auctionReducer