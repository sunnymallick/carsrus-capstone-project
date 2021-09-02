import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { createAuction } from '../../store/auction';


const AuctionForm = () => {
    const [errors, setErrors] = useState([])
    const [vin, setVin] = useState('')
    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')
    const [miles, setMiles] = useState(0)
    const [color, setColor] = useState('white')
    const [engine, setEngine] = useState('')
    const [transmission, setTransmission] = useState('')
    const [imgUrl1, setImgUrl1] = useState('')
    const [imgUrl2, setImgUrl2] = useState('')
    const [imgUrl3, setImgUrl3] = useState('')
    const [imgUrl4, setImgUrl4] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id)
    const history = useHistory();
    
    
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
    const updateStartDate = (e) => {
        setStartDate(e.target.value)
    }
    const updateEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createAuction(userId, vin, year, make, model, type, city, state, description, miles, color, engine, transmission, imgUrl1, imgUrl2, imgUrl3, imgUrl4, startDate, endDate))

        if (data) {
            alert('Success')
            history.push('/')
        }
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
                            
                            <button type='Submit'>Submit Vehicle</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AuctionForm;