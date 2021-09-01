import { useState } from 'react'
import EditCommentForm from './EditCommentForm'
import { Modal } from '../../context/Modal'
import './EditCommentForm.css'

function EditCommentModal({ commentId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='edit-comment-button' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm commentId={commentId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditCommentModal