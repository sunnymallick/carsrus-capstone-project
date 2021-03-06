export const LOAD_COMMENTS = 'comments/LOAD_COMMENTS';
export const CREATE_COMMENT = 'comments/CREATE_COMMENT';
export const DESTROY_COMMENT = 'comments/DESTROY_COMMENT';

const load = comments => ({
    type: LOAD_COMMENTS,
    comments
})

const placeComment = comment => ({
    type: CREATE_COMMENT,
    comment
})


const destroy = commentId => ({
    type: DESTROY_COMMENT,
    commentId
})

export const getComments = () => async dispatch => {
    const res = await fetch('/api/comments/');

    if (res.ok) {
        const comments = await res.json();
        dispatch(load(comments.comments))
        return res;
    }
}

export const getOneComment = (id) => async dispatch => {
    const res = await fetch(`/api/comments/${id}`);

    const comment = await res.json();
    if (res.ok) {
        dispatch(placeComment(comment))
    }
}


export const createComment = (comment, userId, auctionId) => async dispatch => {
    const res = await fetch('/api/comments/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            comment: comment,
            user_id: userId,
            auction_id: auctionId
        })
    })
    if (res.ok) {
        const newComment = await res.json();
        dispatch(placeComment(newComment))
        return newComment;
    }
}

export const editComment = (commentId, comment, userId, auctionId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            comment: comment,
            user_id: userId,
            auction_id: auctionId,
        })
    })

    if (res.ok) {
        const editedComment = await res.json();
        dispatch(placeComment(editedComment))
    }
}

export const deleteComment = (id) => async dispatch => {
    const res = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        await res.json();
        dispatch(destroy(id))
    }
    return res;
}

let initialState = {}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COMMENTS: {
            const allComments = {
                ...state,
            };
            action.comments.forEach((comment) => {
                allComments[comment.id] = comment;
            })
            return allComments
        }
        case CREATE_COMMENT: {
            const newState = {
                ...state,
                [action.comment?.id]: action.comment
            }
            return newState
        }
        case DESTROY_COMMENT: {
            const newState = {...state};
                delete newState[action.commentId]
            return newState;
        }
        default:
            return state
    }
}

export default commentReducer