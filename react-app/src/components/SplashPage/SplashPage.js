import React from "react";
import { Link } from "react-router-dom";
import './SplashPage.css'
import UserLoginModal from "../UserLoginModal";
import UserSignUpModal from "../UserSignUpModal";


const SplashPage = () => {
    return (
        <>
            <div className='splash-container'>
                <h2 id='site-title'>Welcome to Cars 'R' Us, a no-reserve auction website for cars and trucks!</h2>

                <h3 className='splash-info'>Here at Cars 'R' Us, you can host your own vehicle for a 7-day auction that begins upon your submission.</h3>
                <h3 className='splash-info'>You can also bid on a vehicle that you like and have fun conversations with your automotive peers!</h3>
                <h3 className='splash-info'>So, what are you waiting for? Take a look at our auctions and enjoy Cars 'R' Us today!</h3>
                <Link className='auctions-link-splash' to='/auctions' exact={true}>Click here to check out the Live Auctions</Link>

                {/* <div className='login-signup-splash'>
                    <UserLoginModal />
                    <UserSignUpModal />
                </div> */}
            </div>
        </>


        )
}

export default SplashPage