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
                            <a className='footer-link' href='https://github.com/sunnymallick/carsrus-capstone-project'>
                                Link to this repo on Github <i class="fab fa-github"></i></a>
                            <a className='footer-link' href='https://www.linkedin.com/in/sunny-mallick-896a33169/'>
                                Check out my Linkedin profile <i class="fab fa-linkedin"></i></a>
                            <a className='footer-link' href='mailto:sunny.mallick927@gmail.com'>
                                Contact me <i class="fas fa-envelope-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer