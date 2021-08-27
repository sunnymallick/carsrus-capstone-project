import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCuisines } from '../../store/cuisine';
import { getImages } from '../../store/images'
import { getOneAuction, editAuction } from '../../store/auction';
import './EditAuctionModal.css'; 

const EditAuctionForm = ({auctionId, setShowModal}) => {
    const auction = useSelector(state => state.auction[auctionId])
    const [errors, setErrors] = useState([])
    const [description, setDescription] = useState(auction.description)
    const [imgUrl, setImgUrl] = useState('')
}

const handleEdit = async (e) => {
    e.preventDefault();
    const data = await dispatchEvent(editAuction(+auctionId, description, imgUrl));

    setShowModal(false)

    if (data.errors) {
        setErrors(data.errors)
    }
}



export default EditAuctionForm