import React from 'react';
import '../assets/css/Contact_me.css';
import '../assets/css/common.css';

function Contact_me() {
  return (
    <div className="container contact_me_component" id='contact'>
        <h3 className='animate heading_alement'><p data-aos='zoom-in'>Contact <span> Me</span></p></h3>
        <div data-aos='zoom-in' className='row contact_me'>
            <div className="col-md-6 mt-3">
                <form method='POST' action="https://formspree.io/f/mjvnrzzo">
                    <h3>Send <span className='contact_header'>Your</span> Message</h3>
                    <div>
                        <input data-aos='fade-right' type="text" name="Fast name" placeholder='Enter your first name..'  required/>
                        <input data-aos='fade-left' type="text" name="Last name" placeholder='Enter your last name..' />
                    </div>
                    <input data-aos='fade-right' type="email" name="Email address" placeholder='Enter your email'  required />
                    <input data-aos='fade-left' type="number" name="Mobile number" placeholder='Enter your phone number'  />
                    <textarea data-aos='fade-left' placeholder='Write your message....' name="message" required></textarea>
                    <button data-aos='fade-right' type='submit' className="common-btn mt-5 animate">
                        <i></i><i></i><span>Let's Contact</span>
                </button>
                </form>
            </div>
            <div data-aos='zoom-in' className="col-md-6 mt-3">
                <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58359.05878403935!2d89.04690712366364!3d23.90942700128885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe965536b7d61f%3A0x28fea367efdb38c9!2sKushtia!5e0!3m2!1sen!2sbd!4v1700325323413!5m2!1sen!2sbd"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact_me;