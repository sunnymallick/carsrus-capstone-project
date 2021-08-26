import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { createAuction } from '../../store/auction';


const AuctionForm = () => {
    const [errors, setErrors] = useState([])
    const [vin, setVin] = useState('test')
    const [year, setYear] = useState('2011')
    const [make, setMake] = useState('toyota')
    const [model, setModel] = useState('corolla')
    const [type, setType] = useState('car')
    const [reservePrice, setReservePrice] = useState('10000')
    const [description, setDescription] = useState('its a car')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [imgUrl, setImgUrl] = useState('test.url')
    const dispatch = useDispatch();

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
    const updateReservePrice = (e) => {
        setReservePrice(e.target.value)
    }
    const updateDescription = (e) => {
        setDescription(e.target.value)
    }
    const updateStartDate = (e) => {
        setStartDate(e.target.value)
    }
    const updateEndDate = (e) => {
        setEndDate(e.target.value)
    }
    const updateImgUrl = (e) => {
        setImgUrl(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const payload = {
        //     vin,
        //     year,
        //     make,
        //     model,
        //     type,
        //     reservePrice,
        //     description,
        //     startDate,
        //     endDate,
        //     imgUrl
        // }
        const data = await dispatch(createAuction(vin, year, make, model, type, reservePrice, description, startDate, endDate,imgUrl))

        if (data) {
            alert('Success')
        }
        // if (data.errors) {
        //     setErrors(data.errors)
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
					{errors?.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
                <div className='forms-container'>
                    <div className='auction-container'>
                        <p>Submit your vehicle for auction</p>
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
                                placeholder='Reserve Price (if applicable)'
                                type='number'
                                name='reservePrice'
                                onChange={updateReservePrice}
                                value={reservePrice}
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
                                placeholder='Start Date'
                                type='date'
                                name='startDate'
                                onChange={updateStartDate}
                                value={startDate}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='End Date'
                                type='date'
                                name='endDate'
                                onChange={updateEndDate}
                                value={endDate}
                                required={true}></input>
                            <input 
                                className='form-input'
                                placeholder= 'Image URL'
                                type='text'
                                name='imageURL'
                                onChange={updateImgUrl}
                                value={imgUrl}></input>
                            <button type='Submit'>Submit Vehicle</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AuctionForm;