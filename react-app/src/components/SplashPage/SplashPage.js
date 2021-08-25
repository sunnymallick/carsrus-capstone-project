import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './SplashPage.css'

const SplashPage = () => {
    const dispatch = useDispatch()
    
    return (
        <>
            <h1>This is the Home Page</h1>
        </>
    )
}

export default SplashPage