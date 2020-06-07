import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
          <h3>Subscribe to our business insight newsletters</h3>
          <div>
              <input type='text' /> 
              <button>Send</button>
          </div>
          <div className='footer__grid'>
              <div>
                  <h4>Headquarters</h4>
                  <p>15b Sasegbon street, Ikeja GRA, Ikeja, Lagos, Nigeria.</p>
                  <ul>
                    <li href='!#'>01-700-1515</li>
                    <li href='!#'>hello@softcom.ng</li> 
                  </ul>
              </div>

              <div>
                  <h4>Softcom</h4>
                  <p>About us</p>
                  <p>Success stories</p>
                  <p>Leadership</p>
                  <p>Contact us</p>
                  <p>Careers</p>
              </div>

              <div>
                  <h4>More...</h4>
                  <p>Privacy Policy</p>
                  <p>Blog</p>
                  <p>DevX Blog<span>X</span></p>
              </div>
          </div>
        </footer>
    )
}

export default Footer
