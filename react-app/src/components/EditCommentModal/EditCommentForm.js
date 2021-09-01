import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneComment, editComment } from '../../store/comment';

const EditCommentForm = ({commentId, setShowModal}) => {
    const editedComment = useSelector(state => state.comment[commentId])
    const [errors, setErrors] = useState([])
    const [comment, setComment] = useState(editedComment.comment)
    const dispatch = useDispatch()


// useEffect(() => {
//     dispatch(getOneComment(commentId))
// }, [dispatch])

const handleEdit = (e) => {
    e.preventDefault();
    const data = dispatch(editComment(+commentId, comment));

    setShowModal(false)
    if (data.errors) {
        setErrors(data.errors)
    }
}

const updateComment = (e) => {
    setComment(e.target.value);
}

return (
    <>
        <div className='comment-edit-container'>
            <form onSubmit={handleEdit} className='comment-edit-form'>
                <div className='comment-errors'>
                    {errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='edit-form-container'>
                    <p>Update Your Comment</p>
                    <textarea
                        className='form-input'
                        placeholder='Edit Comment'
                        name='comment'
                        onChange={updateComment}
                        value={comment}
                        required={true}></textarea>
                </div>
                <div className='edit-comment_button-container'>
                    <button id='edit-comment-button' type='submit'>
                        Update Comment
                    </button>
                </div>
            </form>
        </div>
    </>
)

}

export default EditCommentForm