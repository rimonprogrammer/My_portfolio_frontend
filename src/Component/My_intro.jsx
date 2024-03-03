import React from 'react';
import '../assets/css/My_intro.css';
import myImg from '../assets/img/me-removebg.png';

function My_intro() {
  return (
    <div className='my_img_section' style={{width: '400px'}}>
        <div className='img_div_section'>
            <div className='img_div'>
                <img src={myImg} alt="" />
            </div>
        </div>
        <div className='middle_text'>
            <h5 className='mt-3'>Nobenur Islam 'Rimon'</h5>
            <p>Frontend web developer</p>
            <p>rahitulislam213@gmail.com</p>
            <p>Kushtia, Khulna, Bangladesh</p>
        </div>
        <div className='my_social_media'>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-whatsapp"></i>
        </div>
        <a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'><button className='button'>Hire Me</button></a>
    </div>
  )
}

export default My_intro;