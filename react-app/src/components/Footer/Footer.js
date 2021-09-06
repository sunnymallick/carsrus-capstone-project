import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info-container">
                    <div className="footer-info">
                        <div className='footer-title'>
                            <h2>Built and designed by Sunny Mallick</h2>
                        </div>
                        <div className='footer-links'> 
                            <a className='footer-link' href='https://www.linkedin.com/in/sunny-mallick-896a33169/'>
                                Check me out on Linkedin <i class="fab fa-linkedin"></i></a>
                            <a className='footer-link' href='https://github.com/sunnymallick/carsrus-capstone-project'>
                                Check out this repo <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer