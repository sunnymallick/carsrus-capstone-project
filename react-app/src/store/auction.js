export const LOAD_AUCTIONS = 'auctions/LOAD_AUCTIONS';
export const CREATE_AUCTION = 'auctions/CREATE_AUCTION';
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
        return res
    }
}

export const getOneAuction = id => async dispatch => {
    const res = await fetch(`/api/auctions/${id}`);

    const auction = await res.json();
    if (res.ok) {
        dispatch(addOneAuction(auction));
    }
};

export const createAuction = (payload) => async dispatch => {
    const res = await fetch('/api/auctions/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const newAuction = await res.json();
        dispatch(addOneAuction(newAuction))
        return newAuction;
    }
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
