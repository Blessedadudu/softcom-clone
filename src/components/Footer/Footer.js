import React from 'react';
import './Footer.scss';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <h4 className='footer__heading'>Subscribe to our business insight newsletters</h4>
            <div className='footer__input-flex'>
                <input type='email' placeholder='Enter email address' className='footer__input'/> 
                <button className='footer__button'>Send <span>&raquo;</span></button>
            </div>
            <div className='footer__grid'>
                <div className='footer__grid-one'>
                    <h4 className='footer__grid-one__heading'>Headquarters</h4>
                    <p>15b Sasegbon street, Ikeja GRA, Ikeja, Lagos, Nigeria.</p>
                    <ul>
                        <li href='!#'>01-700-1515</li>
                        <li href='!#'>hello@softcom.ng</li> 
                    </ul>
                </div>

                <div className='footer__grid-two'>
                    <h4>Softcom</h4>
                    <p>About us</p>
                    <p>Success stories</p>
                    <p>Leadership</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                </div>

                <div className='footer__grid-three'>
                    <h4>More...</h4>
                    <p>Privacy Policy</p>
                    <p>Blog</p>
                    <p>DevX Blog
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon xlink">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </span>
                    </p> 
                </div>

                <div className='footer__grid-4'>
                    <ul>
                        <li href='!#' className='facebook'><FaFacebook/></li>
                        <li href='!#' className='twitter'><FaTwitterSquare/></li>
                        <li href='!#'><FaInstagramSquare/></li>
                        <li href='!#'><FaLinkedin/></li>
                    </ul>
                </div>
            </div>
            <p className='footer__copyright'>Copyright 2020 Softcom Ltd.</p>
        </footer>
    )
}

export default Footer
