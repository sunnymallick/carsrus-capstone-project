import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UserSignUpForm from './SignUpModal';
import UserLoginForm from '../UserLoginModal/UserLoginModal';
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
					<div className='signup-title-container'>
						<h3 className='signup-title'>Sign Up</h3>
					</div>
					<UserSignUpForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default UserSignUpModal;
