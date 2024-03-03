import React from 'react';
import '../assets/css/Hero.css';
import Typewriter from 'typewriter-effect';
import Resume from '../assets/img/Resume.pdf';
import myIMG from '../assets/img/my image.gif';

function Hero(props) {
// ---- expert counter end here ------
  return (
    <div className='container hero_aria' id='hero'>
        <div className="row hero_section">
            <div className="col-md-7">
                <div data-aos="fade-left">
                    <h3 style={props.mode} className='top_Headline animate p-2 rounded-3'>Hello, It's me.!</h3>
                </div>
                <div data-aos="fade-right">
                    <h1 style={props.mode} className='animate p-2 rounded-3'>Nobenur Islam  <small>'Rimon'</small></h1>
                </div>
                <div data-aos="fade-left">
                    <div className='text_animation_aria animate p-2 rounded-3'>
                        <h2 style={props.mode} className='text_animation'>Expert In,  </h2> 
                        <h2 className='technologys text_animation'>
                            <Typewriter
                                options={{
                                    autoStart : true,
                                    loop : true,
                                    delay : 40,
                                    strings : [
                                        "React-js",
                                        "JavaScript",
                                        "HTML 5",
                                        "CSS 3",
                                        "Bootstrap 5",
                                        "Node-JS",
                                        "Express-JS",
                                        "MongoDB"
                                    ]
                                }}
                            />
                        </h2>
                    </div>
                </div>

                <div data-aos="fade-right">
                    <p style={props.mode} className='animate p-2 rounded-3 paragraph user-select-none' data-aos="fade-right">
                        I'm a FrontEnd web Application developer with 1+ years of experience.
                        Client satisfaction is my first priority and as a professional web developer, new technology learning is my passion.
                    </p>
                </div>
                <div className='ps-3' data-aos="fade-left">
                    <button className="common-btn mt-5 animate">
                        <i></i><i></i><a href={Resume} download="Resume-- MD Nobenur Islam Rimon">Download CV <p className="fa-solid fa-cloud-arrow-down"></p></a>
                    </button>
                </div>
            </div>
            <div className="col-md-5 rounded-2 hero_Img animate">
                <div>
                    <img data-aos="fade-left" src={myIMG} alt=""/>
                </div>
                <div data-aos="fade-left" className='img_modify'>
                   I'm a Frontend Web Developer
                </div>
            </div>
        </div>
        <div className='back_hero_section'>
            <a href="#hero">
                <button className='btn btn-danger text-light'><i className="fa-solid fa-arrow-up-from-bracket"></i></button>
            </a>
        </div>
    </div>
  )
}

export default Hero;