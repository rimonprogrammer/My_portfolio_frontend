import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    let date = new Date();
    let year = date.getFullYear()
    
  return (
    <div className="footer">
         <hr  className='hr mt-3' />
        <footer className="container">
            <div className='row'>
                <div className="col-md-3 menu">
                    <h3>Menu</h3>
                    <ul>
                        <a href="#hero"><li>Home</li></a>
                        <a href="#about_me"><li>About Me</li></a>
                        <a href="#my_Skill"><li>My Skill</li></a>
                        <a href="#my_portfolio"><li>My Portfolio</li></a>
                        <a href="#Testimonial"><li>Testimonial</li></a>
                    </ul>
                </div>
                <div className="col-md-3 get_help">
                    <h3>Get Help</h3>
                    <ul>
                        <a href="#faq"><li>FAQ</li></a>
                        <li>Message me</li>
                        <li>Order Status</li>
                        <li>Privacy Policy</li>
                        <li>Payment Options</li>
                    </ul>
                </div>
                <div className="col-md-3 contact">
                    <h3>Contact me</h3>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'>
                                <i className="fa-brands fa-linkedin"></i>
                                <p>LinkedIn</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/rahitulislam02" target='_blank'>
                                <i className="fa-brands fa-twitter"></i>
                                <p>Twitter</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rahitulislamrimon/" target='_blank'>
                                <i className="fa-brands fa-facebook"></i>
                                <p>Faceook</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://whatsapp.com/dl/" target='_blank'>
                                <i className="fa-brands fa-square-whatsapp"></i>
                                <p>01313687347</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 Subscribe">
                    <h3>Subscribe Me</h3>
                    <div>
                        <form className='Subscribe_aria' method='POST' action="https://formspree.io/f/mjvnrzzo">
                            <input type="email" name="Subscribe" placeholder='Enter Your Email...' />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                    <ul className='email_phone'>
                        <li>
                            <p>Email: </p>
                            <p className='ps-1'>rahitulislam213@gmail.com</p>
                        </li>
                        <li>
                            <p>Phone/WhatsApp: </p>
                            <p className='ps-1'>01313687347</p>
                        </li>
                    </ul>
                    <h5 className='followMe'>Follow me on !!</h5>
                    <div className='social_icon'>
                        <a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/rimonprogrammer/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/rahitulislam02" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/rahitul_islam_rimon/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://pin.it/1bmfQwO" target='_blank'><i className="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        <hr  className='hr mt-3 m-0' />
        <div className='footer_bottom'>
            <h5 className='text-center pt-3'>&copy; Copyright <span>"{year}"</span> || All right reserve by MD Nobenur Islam Rimon</h5>
        </div>
    </div>
  )
}

export default Footer