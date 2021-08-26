import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


const AuctionForm = () => {

    return (
        <>
            <form>
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
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Year'
                                type='text'
                                name='year'
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Make'
                                type='text'
                                name='make'
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Model'
                                type='text'
                                name='model'
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Type'
                                type='text'
                                name='type'
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='Reserve Price (if applicable)'
                                type='number'
                                name='reservePrice'
                                onChange={}
                                value={}
                                required={true}></input>
                            <textarea
                                className='form-input'
                                placeholder='Please leave a description about your vehicle.'
                                name='description'
                                onChange={}
                                value={}
                                required={true}></textarea>
                            <input
                                className='form-input'
                                placeholder='Start Date'
                                type='date'
                                name='startDate'
                                onChange={}
                                value={}
                                required={true}></input>
                            <input
                                className='form-input'
                                placeholder='End Date'
                                type='date'
                                name='endDate'
                                onChange={}
                                value={}
                                required={true}></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AuctionForm;