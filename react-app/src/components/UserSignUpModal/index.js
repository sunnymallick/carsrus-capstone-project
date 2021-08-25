import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UserSignUpForm from './SignUpModal';
import './SignUpModal.css';

function UserSignUpModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button className='login-button' onClick={() => setShowModal(true)}>
				Sign Up
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Sign Up</h3>
                        <p>Already have an account? Login here...</p>
					</div>
					<UserSignUpForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default UserSignUpModal;
