import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneAuction, editAuction } from '../../store/auction';
import './EditAuctionModal.css'; 

const EditAuctionForm = ({auctionId, setShowModal}) => {
    const auction = useSelector(state => state.auction[auctionId])
    const [errors, setErrors] = useState([])
    const [description, setDescription] = useState(auction.description)
    // const [imgUrl, setImgUrl] = useState('')
    const dispatch = useDispatch()


useEffect(() => {
    dispatch(getOneAuction(auctionId))
}, [dispatch])

const handleEdit = async (e) => {
    e.preventDefault();
    const data = await dispatch(editAuction(+auctionId, description));

    setShowModal(false)

    if (data.errors) {
        setErrors(data.errors)
    }
}

const updateDescription = (e) => {
    setDescription(e.target.value);
}

// const updateImgUrl = (e) => {
//     setImgUrl(e.target.value);
// }

return (
    <>
        <div className='auction-edit-container'>
            <form onSubmit={handleEdit} className='auction-edit-form'>
                <div>
                    {errors?.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='edit-form-container'>
                    <p>Update the Description for your {auction?.year} {auction?.make} {auction?.model}</p>
                        <textarea
                            className='form-input'
                            placeholder='Description'
                            name='description'
                            onChange={updateDescription}
                            value={description}
                            required={true}></textarea>
                </div>
                {/* <div className='edit-form-container'>
                        <input
                            className='form-input'
                            placeholder='Images'
                            name='images'
                            onChange={updateImgUrl}
                            value={imgUrl}></input>
                </div> */}
                <div className='edit-auction_button-container'>
					<button id='edit-auction-button' type='submit'>
						Update Auction
					</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default EditAuctionForm