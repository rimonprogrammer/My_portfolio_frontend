import React from 'react';
import '../assets/css/AboutUs.css';
import '../assets/css/common.css';
import Navbar from './../Component/Navbar';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import javascript from '../assets/img/js.jpg';
import bootstrap from '../assets/img/bootstrap.png';
import react from '../assets/img/React-icon.svg.png';
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
import CountUp from 'react-countup';
import My_intro from '../Component/My_intro';
import { use_UI_Context } from '../ContextAPI/UIContext';
import { MdHomeFilled } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserNurse } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Resume from '../assets/md nobenur islam rimon CV.pdf'

function About_US() {
  document.title = 'About-US || Rimon portfolio 2.0';
    
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<
  const data = use_UI_Context();
  const { theme } = data;
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<

  document.body.style.backgroundColor = theme;
  return (
    <> 
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
                      <button className='button btn-bg'>
                          <MdHomeFilled className='me-1' />
                          Introduction
                      </button>
                      <h1>Hey! I'm <span>Rimon</span></h1>
                      <h2>Frontend web developer</h2>
                      <p className='user-select-none'>A forward-thinking Frontend engineer who can work as a frontend web developer in a dynamic environment</p>
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
                                      <CountUp start={0} end={20} duration={1} delay={0}/>+
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
                      <button className='button btn-bg'>
                          <FaUserNurse className='me-1'/>
                          About-me
                      </button>
                      <p className='mt-5'>Hello I Am,</p>
                      <p>MD Nobenur Islam Rimon</p>
                      <p>Front-end Web Developer (MERN STACK)</p>
                      <p>I am a professional front-end web developer having core expertise in developing high-quality, interactive, pixel-perfect, and responsive web applications. I've 1+ years of experience in the web development field & I've already completed 20+ projects. I'm expert in HTML, CSS, Bootstrap, JavaScript & React. Also, I can build user authentication + Bcrypt-JS security, Complete CRUD operation, & rest API creation using Node-JS, express-JS and MongoDB.</p>
                      <p> My coding is full fresh hand type, SEO friendly, & well commented. As a professional front end web developer, new technology learning is my passion and still now, continuously I'm improving my skills</p>
                      <p> &lt;/&gt; My Development Process.</p>
                      <ul>
                        {
                            devProcess.map((des, index) =>{
                              return(
                                  <li key={index}>
                                      ✅ {des.description}
                                  </li>
                              )
                            })
                        }
                      </ul>

                      <p>⭐Why choose me❓</p>
                      <ul>
                        {
                            whyChoos.map((des, index) =>{
                              return(
                                  <li key={index}>
                                       ✅ {des.description}
                                  </li>
                              )
                            })
                        }
                      </ul>
                      <p className='note'>Note: <span>Kindly Discuss Your Project Before Placing The Order.</span></p>
                  </div>
                  {/* ---- my details section end ---- */}
                  
                  <div className='mt-5'>
                      <button className='button btn-bg'>
                          🔥My specialize
                      </button>
                      <ul>
                          <li>✅ User authentication using React-JS, Node-JS, Express-JS, and MongoDB.</li>
                          <li>✅ Security using Bcrypt-JS</li>
                          <li>✅ Custom API creation & integration</li>
                          <li>✅ Complete CRUD (Create, Read, Update, Delete) operation using React-JS, Node-JS, Express-JS, and MongoDB.</li>
                      </ul>
                  </div>


                  {/* ---- Expert level experience section start ---- */}
                  <div className='mt-5'>
                      <button className='button btn-bg'>
                        &lt;/&gt;
                        Frontend technology
                      </button>
                      <div className='technology-logo'>
                        {
                          Frontend.map((element, index)=>{
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
                      <button className='button btn-bg'>
                        <IoSettingsOutline className='me-1'/>
                        Backend technology
                      </button>
                      <div className='technology-logo'>
                        {
                          Backend.map((element, index)=>{
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
                      <button className='button btn-bg'>
                          <FaTools className='me-1' />
                          Tools
                      </button>
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
                      <button className='button btn-bg'>
                          <FaGraduationCap className='me-1' />
                          Education
                      </button>
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
                      <button className='button btn-bg'>
                            <FiPhoneCall className='me-1' />
                            Contact | Hire
                      </button>
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
                      <button className='button btn-bg'>
                          <MdEmail className='me-1' />
                          Resume
                      </button>
                      <hr />
                      <a className='button text-decoration-none' href={Resume} download="Resume-- MD Nobenur Islam Rimon">
                          Download Resume
                          <IoMdArrowDropdown/>
                      </a>
                  </div>
                  {/* ----- resume section end ---- */}

              </div>
            </div>
        </div>
    </>
  )
}

export default About_US;

const devProcess = [
  {
    description : "Reusable components."
  },
  {
    description : "100% responsive design."
  },
  {
    description : "Visually stunning layout design"
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
    description : "Bcrypt JS security"
  },
  {
    description : "Well structured & commented code."
  },
  {
    description : "Hand type SEO-friendly code."
  },
  {
    description : "High-Quality and Pixel Perfect Design."
  },
  {
    description : "W3c validation"
  },
  {
    description : "PSD/Figma/XD/AI to HTML"
  },
  {
    description : "PSD/Figma/XD/AI to React"
  }
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

const Frontend = [
  {
    id: 1,
    name : "HTML",
    img : html
  },
  {
    id: 2,
    name : "CSS",
    img : css
  },
  {
    id: 3,
    name : "Javascript",
    img : javascript
  },
  {
    id: 4,
    name : "Bootstrap",
    img : bootstrap
  },
  {
    id: 5,
    name : "React",
    img : react
  }
]
const Backend = [
  {
    id: 2,
    name : "node.js",
    img : node_js
  },
  {
    id: 3,
    name : "express.js",
    img : express_js
  },
  {
    id: 4,
    name : "MongoDB",
    img : mongodb
  },
  ,
  {
    id: 5,
    name : "bcrypt",
    img : bcrypt
  },
  {
    id: 6,
    name : "Mongoose",
    img : mongoose
  }
]

const tools = [
  {
    id: 1,
    name : "VS Code",
    img : vscode
  },
  {
    id: 2,
    name : "Git",
    img : git
  },
  {
    id: 3,
    name : "GitHub",
    img : github
  },
  {
    id: 4,
    name : "Netlify",
    img : netlify
  },
  {
    id: 5,
    name : "Vercel",
    img : vercel
  }
]