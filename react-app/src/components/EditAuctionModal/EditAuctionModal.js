import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneAuction, editAuction } from '../../store/auction';
import './EditAuctionModal.css'; 

const EditAuctionForm = ({auctionId, setShowModal}) => {
    const auction = useSelector(state => state.auction[auctionId])
    const [errors, setErrors] = useState([])
    const [vin, setVin] = useState(auction.vin)
    const [year, setYear] = useState(auction.year)
    const [make, setMake] = useState(auction.make)
    const [model, setModel] = useState(auction.model)
    const [type, setType] = useState(auction.type)
    const [city, setCity] = useState(auction.city)
    const [state, setState] = useState(auction.state)
    const [description, setDescription] = useState(auction.description)
    const [miles, setMiles] = useState(auction.miles)
    const [color, setColor] = useState(auction.color)
    const [engine, setEngine] = useState(auction.engine)
    const [transmission, setTransmission] = useState(auction.transmission)
    const [imgUrl1, setImgUrl1] = useState(auction.img_url_1)
    const [imgUrl2, setImgUrl2] = useState(auction.img_url_2)
    const [imgUrl3, setImgUrl3] = useState(auction.img_url_3)
    const [imgUrl4, setImgUrl4] = useState(auction.img_url_4)
    const dispatch = useDispatch();


useEffect(() => {
    dispatch(getOneAuction(auctionId))
}, [dispatch])

const handleEdit = (e) => {
    e.preventDefault();
    const data = dispatch(editAuction(+auctionId, vin, year, make, model, type, city, state, description, miles, color, engine, transmission, imgUrl1, imgUrl2, imgUrl3, imgUrl4));

    setShowModal(false)
    if (data) {
        alert('Your auction has successfully been updated!')
    }
    if (data.errors) {
        setErrors(data.errors)
    }
}

const updateVin = (e) => {
    setVin(e.target.value)
}
const updateYear = (e) => {
    setYear(e.target.value)
}
const updateMake = (e) => {
    setMake(e.target.value)
}
const updateModel = (e) => {
    setModel(e.target.value)
}
const updateType = (e) => {
    setType(e.target.value)
}
const updateCity = (e) => {
    setCity(e.target.value)
}
const updateState = (e) => {
    setState(e.target.value)
}
const updateDescription = (e) => {
    setDescription(e.target.value)
}
const updateMiles = (e) => {
    setMiles(e.target.value)
}
const updateColor = (e) => {
    setColor(e.target.value)
}
const updateEngine = (e) => {
    setEngine(e.target.value)
}
const updateTransmission = (e) => {
    setTransmission(e.target.value)
}
const updateImgUrl1 = (e) => {
    setImgUrl1(e.target.value)
}
const updateImgUrl2 = (e) => {
    setImgUrl2(e.target.value)
}
const updateImgUrl3 = (e) => {
    setImgUrl3(e.target.value)
}
const updateImgUrl4 = (e) => {
    setImgUrl4(e.target.value)
}


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
                    <p className='edit-form-header'>Update the information for your {auction?.year} {auction?.make} {auction?.model}</p>
                            <input
                                className='form-input'
                                placeholder='VIN'
                                type='text'
                                name='vin'
                                onChange={updateVin}
                                value={vin}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Year'
                                type='text'
                                name='year'
                                onChange={updateYear}
                                value={year}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Make'
                                type='text'
                                name='make'
                                onChange={updateMake}
                                value={make}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Model'
                                type='text'
                                name='model'
                                onChange={updateModel}
                                value={model}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Type'
                                type='text'
                                name='type'
                                onChange={updateType}
                                value={type}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='City'
                                type='text'
                                name='city'
                                onChange={updateCity}
                                value={city}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='State'
                                type='text'
                                name='state'
                                onChange={updateState}
                                value={state}
                                required={true}></input>
                            <textarea
                                className='form-input'
                                placeholder='Please leave a description about your vehicle.'
                                name='description'
                                onChange={updateDescription}
                                value={description}
                                required={true}></textarea>
                            <input
                                className='form-input'
                                placeholder='Miles'
                                type='number'
                                name='miles'
                                onChange={updateMiles}
                                value={miles}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Color'
                                type='text'
                                name='color'
                                onChange={updateColor}
                                value={color}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Engine'
                                type='text'
                                name='engine'
                                onChange={updateEngine}
                                value={engine}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Transmission'
                                type='text'
                                name='transmission'
                                onChange={updateTransmission}
                                value={transmission}
                                required={true}></input>
                            <input 
                                className='form-input'
                                placeholder= 'Image URL 1'
                                type='text'
                                name='imageURL1'
                                onChange={updateImgUrl1}
                                value={imgUrl1}></input>
                            <input 
                                className='form-input'
                                placeholder= 'Image URL 2'
                                type='text'
                                name='imageURL2'
                                onChange={updateImgUrl2}
                                value={imgUrl2}></input>
                            <input 
                                className='form-input'
                                placeholder= 'Image URL 3'
                                type='text'
                                name='imageURL3'
                                onChange={updateImgUrl3}
                                value={imgUrl3}></input>
                            <input 
                                className='form-input'
                                placeholder= 'Image URL 4'
                                type='text'
                                name='imageURL4'
                                onChange={updateImgUrl4}
                                value={imgUrl4}></input>
                     <div className='edit-auction_button-container'>
					    <button className='bid-comment-submit-edit-delete' type='submit'>
						Update Auction
					</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}

export default EditAuctionForm