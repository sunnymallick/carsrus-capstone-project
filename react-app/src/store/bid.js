import { CREATE_AUCTION } from "./auction";

export const LOAD_BIDS = 'bids/LOAD_BIDS';
export const CREATE_BID = 'bids/CREATE_AUCTION';

const load = bids => ({
    type: LOAD_BIDS,
    bids
})

const placeBid = bid => ({
    type: CREATE_AUCTION,
    bid
})

export const getBids = () => async dispatch => {
    const res = await fetch('/api/bids/');

    if (res.ok) {
        const bids = await res.json()
        dispatch(load(bids.bids))
        return res;
    }
}

