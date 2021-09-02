import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { destroyAuction } from '../../store/auction';
import './DeleteAuction.css'


function DeleteAuction({auctionId, setShowModal}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams()
    const userId = useSelector(state => state.session.user.id)

    const handleDelete = (e) => {
        const success = dispatch(destroyAuction(auctionId));
        if (success) {
            e.preventDefault();
            setShowModal(false);
            alert('Your auction has successfully been cancelled.')
            history.push(`/users/${userId}`)
        } else {
            alert('Please try again')
        }
    };
    const handleCancel = ((e) => {
        e.preventDefault();
        setShowModal(false)
    });
    return (
        <div className="delete-confirmation-container">
          <div className="delete-confirmation-message">
            <p className="confirmation-message">Are you sure you want to cancel this auction? You will be charged a 25% convenience fee for doing so.</p>
          </div>
          <div className="delete-confirmation-buttons">
            <button className="delete-confirmation-button" onClick={handleDelete}>Delete</button>
            <button className="cancel-confirmation-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      );
}


export default DeleteAuction
