import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteAuction from './DeleteAuction'
import './DeleteAuction.css';

function DeleteAuctionModal({auctionId}) {
	const [showModal, setShowModal] = useState(false);

	return (
        <>
            <button id='delete-auction-button' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteAuction auctionId={auctionId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

	);
}

export default DeleteAuctionModal;
