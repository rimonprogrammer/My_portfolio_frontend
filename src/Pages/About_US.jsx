import React, { useContext } from 'react';
import '../assets/css/AboutUs.css';
import '../assets/css/common.css';
import Navbar from './../Component/Navbar';
import html from '../assets/img/html.png';
import xml from '../assets/img/xml.png';
import css from '../assets/img/css.png';
import javascript from '../assets/img/javascriptLogo.png';
import bootstrap from '../assets/img/bootstrap.png';
import react from '../assets/img/React-icon.svg.png';
import jquery from '../assets/img/jquery.png';
import node_js from '../assets/img/node.js.png';
import express_js from '../assets/img/express.png';
import mongodb from '../assets/img/mongodb.png';
import mongoose from '../assets/img/mongoose.png';
import bcrypt from '../assets/img/bcrypt.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github..png';
import netlify from '../assets/img/netlify.webp';
import vscode from '../assets/img/vscode.jpg';
import vercel from '../assets/img/vercel.png';
import Resume from '../assets/img/Resume.png'
import CountUp from 'react-countup';
import My_intro from '../Component/My_intro';
import { use_UI_Context } from '../ContextAPI/UIContext';

function About_US() {
  document.title = 'About-US || Rimon portfolio 2.0';
    
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<
  const data = use_UI_Context();
  const { theme } = data;
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<

  document.body.style.backgroundColor = theme;
  return (
    <div>
        <Navbar />
        <div className="container">
          <div className='row row_section'>
            <div className="col-lg-4">
                <My_intro/>
            </div>

            {/* -- start right side --- */}
            <div className="col-lg-8 mt-3 Right_section">
                {/* ---- introduction section start ---- */}
                <div className='introduction'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-house"></i>Introduction</button>
                    <h1>Hey! I'm <span>Rimon</span></h1>
                    <h2>Software Engineer</h2>
                    <p className='user-select-none'>A forward-thinking software engineer who can work as a web developer in a dynamic environment</p>
                    <div className="experience_intro">
                        <div className='d-flex'>
                            <div>
                                <h1>
                                    <CountUp start={0} end={1} duration={2} delay={0}/>+
                                </h1>
                                <p>Years of <span>experience</span></p>
                            </div>
                            <div className='project'>
                                <h1>
                                    <CountUp start={0} end={50} duration={1} delay={0}/>+
                                </h1>
                                <p>Project <span>completed</span></p>
                            </div>
                        </div>
                        <div>
                            <a href="#more-details"><button className='more-details-btn'>More details<i className="fa-solid fa-circle-arrow-down"></i></button></a>
                        </div>
                    </div>
                </div>
                {/* ---- introduction section end ---- */}

                {/* ---- my details section start ---- */}
                <div className='my-details'  id='more-details'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-user"></i>About-me</button>
                    <p className='mt-5'>Hello I Am.</p>
                    <p>MD Nobenur Islam Rimon</p>
                    <p>Front-end Web Developer MERN!</p>
                    <p>I am a professional front-end web developer having core expertise in developing high-quality, interactive, pixel-perfect, and responsive web applications using React JS. I have 1+ years of experience in web development and I have already completed 50+ projects such as E-commerce app, Business app, Portfolio App, Weather App, News App, TextModify App etc. I will be able to work with server-side data processing and handling.</p>
                    
                    <p>My Development Process.</p>
                    <ul>
                    {
                          devProcess.map((des, index) =>{
                            return(
                                <li key={index}>
                                    <i className="fa-solid fa-check-double"></i>
                                    {des.description}
                                </li>
                            )
                          })
                      }
                    </ul>

                    <p>Why choose me?</p>
                    <ul>
                      {
                          whyChoos.map((des, index) =>{
                            return(
                                <li key={index}>
                                    <i className="fa-solid fa-check-double"></i>
                                    {des.description}
                                </li>
                            )
                          })
                      }
                    </ul>
                    <p className='note'>Note: <span>Kindly Discuss Your Project Before Placing The Order.</span></p>
                </div>
                {/* ---- my details section end ---- */}
                
                <div className='mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-brands fa-apple"></i>My specialize</button>
                    <ul>
                        <li><i className="me-2 fa-solid fa-check-double"></i>MongoDB authentication System</li>
                        <li><i className="me-2 fa-solid fa-check-double"></i>Security using Bcrypt-JS (Password hash + sold) </li>
                        <li><i className="me-2 fa-solid fa-check-double"></i>intermediate level of experience in Node-JS, Express-JS, and MongoDB</li>
                    </ul>
                </div>


                {/* ---- Expert level experience section start ---- */}
                <div className='mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-brands fa-apple"></i>Expert Level Experience</button>
                    <div className='technology-logo'>
                      {
                        Expert.map((element, index)=>{
                            return(
                              <div key={index}>
                                  <div>
                                      <img src={element.img} alt={`${element.name} logo`} />
                                      <p>{element.name}</p>
                                  </div>
                              </div>
                            )
                        })
                      }
                    </div>
                </div>
                {/* ---- Expert level experience section end ---- */}

                {/* ---- Intermediate level experience section start ---- */}
                <div className='mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-mug-hot"></i>Intermediate Level Experience</button>
                    <div className='technology-logo'>
                      {
                        Intermediate.map((element, index)=>{
                            return(
                              <div key={index}>
                                  <div>
                                      <img src={element.img} alt={`${element.name} logo`} />
                                      <p>{element.name}</p>
                                  </div>
                              </div>
                            )
                        })
                      }
                    </div>
                </div>
                {/* ---- Intermediate level experience section end ---- */}

                {/* ----- tools section start ---- */}
                <div className='mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-graduation-cap"></i>Tools</button>
                    <div className='technology-logo'>
                      {
                        tools.map((element, index)=>{
                            return(
                              <div key={index}>
                                  <div>
                                      <img src={element.img} alt={`${element.name} logo`} />
                                      <p>{element.name}</p>
                                  </div>
                              </div>
                            )
                        })
                      }
                    </div>
                </div>
                {/* ----- tools section end ---- */}

                {/* ----- education section start ---- */}
                <div className='education mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-graduation-cap"></i>Education</button>
                    <div className='diploma'>
                        <p>- Diploma In Computer Science And Engineering, DPI, <span> 2021-2022</span></p>
                        <span>Running + 50% Complete</span>
                    </div>
                    <div className='diploma'>
                        <p>- Secondary School Certificate, Anayetpur High School (Commerce), <span> 2020</span></p>
                        <span>Complete</span>
                    </div>
                </div>
                {/* ----- education section end ---- */}

                {/* ----- contact | hire section start ---- */}
                <div className='mt-5' id='hire_me'>
                    <button className='heading-btn'><i className="me-1 fa-solid fa-phone-volume"></i>Contact | Hire</button>
                    <div>
                        <ul className='hire-me'>
                            <li><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'>LinkedIn</a></li>
                            <li><i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/rimonprogrammer/" target='_blank'>Facebook</a></li>
                            <li><i className="fa-brands fa-instagram"></i><a href="https://www.instagram.com/rahitul_islam_rimon/" target='_blank'>Instagram</a></li>
                            <li><i className="fa-brands fa-twitter"></i><a href="https://twitter.com/rahitulislam02" target='_blank'>Twitter</a></li>
                            <li>Phone/WhatsApp: 01313687347</li>
                            <li>Email: rahitulislam213@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/* ----- contact | hire section end ---- */}

                {/* ----- resume section start ---- */}
                <div className='mt-5'>
                    <button className='heading-btn'><i className="me-1 fa-regular fa-envelope"></i>Resume</button>
                    <hr />
                    <a href={Resume} download="Resume-- MD Nobenur Islam Rimon"><button className='resume-btn'><i className="me-1 fa-solid fa-circle-arrow-down"></i>Download Resume</button></a>
                </div>
                {/* ----- resume section end ---- */}

            </div>
          </div>
        </div>
    </div>
  )
}

export default About_US;

const devProcess = [
  {
      description : "Reusable components."
  },
  {
    description : "Responsive design."
  },
  {
    description : "Cross browser compatibility."
  },
  {
    description : "MongoDB (authentication)"
  },
  {
    description : "API Integration & Custom API create"
  },
  {
    description : "Bcrypt JS (hash + sold)"
  },
  {
    description : "Mongoose models"
  },
  {
    description : "Visually stunning layout design"
  },
  {
    description : "Well structured code."
  },
  {
    description : "SEO-friendly code."
  },
  {
    description : "High-Quality and Pixel Perfect Design."
  },
]
const whyChoos = [
  {
      description : "Expertise as a front-end Developer."
  },
  {
      description : "100% client satisfaction."
  },
  {
      description : "Fast and efficient development process."
  },
  {
      description : "Effective communication and collaboration."
  },
  {
      description : "Continuous learning and improvement."
  },
  {
      description : "24/7 availability"
  }
]

const Expert = [
  {
    id: 1,
    name : "HTML",
    img : html,
    catagory : "Expert"
  },
  {
    id: 2,
    name : "CSS",
    img : css,
    catagory : "Expert"
  },
  {
    id: 3,
    name : "Javascript",
    img : javascript,
    catagory : "Expert"
  },
  {
    id: 4,
    name : "Bootstrap",
    img : bootstrap,
    catagory : "Expert"
  },
  {
    id: 5,
    name : "React",
    img : react,
    catagory : "Expert"
  },
  {
    id: 6,
    name : "XML",
    img : xml,
    catagory : "Expert"
  }
]
const Intermediate = [
  {
    id: 1,
    name : "jQuery",
    img : jquery,
    catagory : "Intermediate"
  },
  {
    id: 2,
    name : "node.js",
    img : node_js,
    catagory : "Intermediate"
  },
  {
    id: 3,
    name : "express.js",
    img : express_js,
    catagory : "Intermediate"
  },
  {
    id: 4,
    name : "MongoDB",
    img : mongodb,
    catagory : "Intermediate"
  }
]

const tools = [
  {
    id: 1,
    name : "VS Code",
    img : vscode,
    catagory : "Tools"
  },
  {
    id: 2,
    name : "Git",
    img : git,
    catagory : "Tools"
  },
  {
    id: 3,
    name : "GitHub",
    img : github,
    catagory : "Tools"
  },
  {
    id: 4,
    name : "Netlify",
    img : netlify,
    catagory : "Tools"
  },
  {
    id: 5,
    name : "Vercel",
    img : vercel,
    catagory : "Tools"
  }
  ,
  {
    id: 5,
    name : "bcrypt",
    img : bcrypt,
    catagory : "Intermediate"
  },
  {
    id: 6,
    name : "Mongoose",
    img : mongoose,
    catagory : "Intermediate"
  }
]