import { useState } from 'react'
import EditAuctionForm from './EditAuctionModal'
import { Modal } from '../../context/Modal'
import './EditAuctionModal.css'

function EditAuctionModal({ auctionId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='edit-auction-button' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAuctionForm auctionId={auctionId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditAuctionModal
