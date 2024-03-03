import React from 'react';
import '../assets/css/Testimonial.css';
import '../assets/css/common.css';
import client_1 from '../assets/img/client1.jpg';
import client_2 from '../assets/img/client2.jpg';
import client_3 from '../assets/img/client3.jpg';
import client_4 from '../assets/img/client4.jpg';
import client_5 from '../assets/img/client5.jpg';
// ----------- carousel slider -----------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// ----------- carousel slider -----------

function Testimonial() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
      <section className='testimonial_section' id='Testimonial'>
        <div className='container'>
            <h3 className='animate heading_alement'><p data-aos='zoom-in'>Testimonial</p></h3>
        </div>
        <div className="container">
            <div className='testimonial_aria container'>
                <Slider {...settings}>
                    {
                        data.map((details, index) =>(
                            <div key={index}>
                                <div className='testimonial_box animate'>
                                  <div className='testimonial_img'>
                                      <img src={details.img} alt={details.name} />
                                  </div>
                                  <div className='testimonial_Text'>
                                      <h2>{details.name}</h2>
                                      <h3>{details.country}</h3>
                                      <p>{details.description}</p>
                                  </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </section>
    
  )
}
// data-aos={details.data_bs}

const data = [
  {
      name : 'John Smith',
      description : '"Very experienced and super fast. Weren’t able to get one thing done but not his fault. I will definitely use him again!"',
      country : 'NewYork',
      img : client_1,
      data_bs : 'fade-right'
  },
  
  {
      name : 'Michael Davis',
      description : '"Great experience, highly recommend. Worked through all my questions with me and was very timely in his responsiveness."',
      country : 'Canada',
      img : client_2,
      data_bs : 'zoom-in'
  },
  {
      name : 'Robert Brown',
      description : '"Exceptional web development! They transformed our site into a user-friendly masterpiece. Highly recommended!"',
      country : 'United State (USA)',
      img : client_3,
      data_bs : 'fade-left'
  },
  {
      name : 'Lisa Anderson',
      description : '"He was excellent to work with, and he did a great job fixing osme issues that we had"',
      country : 'Garmany',
      img : client_4
  },
  {
      name : 'David Martinez',
      description : '"Outstanding web development - they brought our vision to life with precision and creativity. Thrilled with the results!"',
      country : 'United Kindom (UK)',
      img : client_5
  }
]


export default Testimonial;
