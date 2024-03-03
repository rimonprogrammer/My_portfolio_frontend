import React from 'react';
import '../assets/css/My_Skills.css';
import '../assets/css/common.css';
import ReactLogo from '../assets/img/ReactLogo.png';
import JSLogo from '../assets/img/javascriptLogo.png';
import BootstrapLogo from '../assets/img/BootstrapLogo.png';
import htmlCssLogo from '../assets/img/htmlCss.png';
import webDesignLogo from '../assets/img/code.png';
import SkillsName from './SkillsName';
import { Link } from 'react-router-dom';
import Blog from './../Pages/Blog';
import Skill_Ratio from './Skill_Ratio';

function My_Skills() {
  return (
    <section className='container' id='my_Skill'>
        <div className=' my_Skill'>
            <div>
                <h3 className='animate heading_alement'><p data-aos='zoom-in'>My <span> Skills</span></p></h3>
            </div>
            <SkillsName/>
        </div>
        <Skill_Ratio/>  {/*  my skills tools ratio  */}


{/* ------------ my skills details start ---------------- */}
        <section className='skill_details_Section'>
            <h2 className='text-center' data-aos='zoom-in'>My Skills Details Below</h2>
            <div className="details_row">
                {/*----- left section start----- */}
                <div className="col-md-5">
                    <div className="details_box_section">
                    <div className="details_Box" data-aos='fade-right'>
                            <div className='animate rounded-3 p-2'>
                                <h4>Front-End web Developer</h4>
                                <p className="user-select-none">As a expert frontend web developer I'm expert in HTML 5, CSS 3, Bootstrap 5.3, Javascript (es-6), React-js, Responsive layout design, AOS animation, GitHub, and Vanilla-tilt effect. My coding is full fresh hand type, SEO friendly & well commented. I can assure you of the best quality, mobile responsive & visually appealing user interface. </p>
                                <Link to='/Blog'>See blog <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>

                        <div className="details_Box_hidden animate rounded-3">
                            <h5>Hire me As a Expert Front-End web developer</h5>
                        </div>

                        <div className="details_Box left_side" data-aos='fade-right'>
                            <div className='animate rounded-3 p-2'>
                                <h4>Javascript Developer</h4>
                                <p>JavaScript is the most useable programming language to create a dynamic website. The latest version of JavaScript (modern javascript es-6) is makes more useable. It's simplify the code & running time which makes more effective the website.</p>
                                <Link to='/Blog'>See blog <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>

                        <div className="details_Box_hidden animate rounded-3">
                            <h5>Hire me As a Expert Front-End web developer</h5>
                        </div>
                        <div className="details_Box left_side" data-aos='fade-right'>
                            <div className='animate rounded-3 p-2'>
                                <h4>HTML CSS Developer</h4>
                                <p className="user-select-none">HTML is a markup language that can build a website structure and CSS is a style sheet that designs a website. Browser can easily read the HTML file & HTML is the mother language of browser.</p>
                                <Link to='/Blog'>See blog <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*----- left section end----- */}

                {/*----- middle section start----- */}
                <div className="col-md-2 vartical_rol_aria"  data-aos='zoom-in'>
                    {
                        vartical_rol_img.map((image, index) =>{
                            const {data_aos, class_name, img} = image;
                            return(
                                <img 
                                    key={index}
                                    className={class_name} 
                                    data-aos={data_aos} src={img} 
                                    alt={class_name} 
                                />
                            )
                        })
                    }
                </div>
                {/*----- middle section end----- */}

                {/*----- right section start----- */}
                <div className="col-md-5">
                    <div className="details_box_section">

                        <div className="details_Box_hidden animate rounded-3">
                            <h5>Hire me As a Expert Front-End web developer</h5>
                        </div>
                        <div className="details_Box right_side" data-aos='fade-left'>
                            <div className='animate rounded-3 p-2'>
                                <h4>React-js Developer</h4>
                                <p className="user-select-none">As an expert React website developer, I can work with React router, React hooks(useState, useEffect, useReducer, useRef, useNavigate, useLocation), context API, React-Icons, React-toastify, React-Slick, Vanilla-tilt, AOS animation and many others. React is the most popular Javascript library/Framework that was launched in 2011. React uses a 'Virtual DOM' and re-usable component-based architecture which is increase the popularity of React.</p>
                                <Link to='/Blog'>See blog <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>

                        <div className="details_Box_hidden animate rounded-3">
                            <h5>Hire me As a Expert Front-End web developer</h5>
                        </div>
                        <div className="details_Box right_side" data-aos='fade-left'>
                            <div className='animate rounded-3 p-2'>
                                <h4>Bootstrap Developer</h4>
                                <p className="user-select-none">Bootstrap is the most popular CSS framework to easily design user interface. It is a very simple and useful framework for building a responsive layout design. There are few many classes in Bootstrap which makes easier to create a design.</p>
                                <Link to='/Blog'>See blog <i className="fa-solid fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                        <div className="details_Box_hidden animate rounded-3">
                            <h5>Hire me As a Expert Front-End web developer</h5>
                        </div>
                    </div>
                </div>
                {/*----- right section end----- */}
            </div>
        </section>
{/* ------------ my skills details start ---------------- */}
    </section>
  )
}

export default My_Skills;


const vartical_rol_img = [
    {
        data_aos : "fade-left",
        img : webDesignLogo,
        class_name : "webDesignLogo",
    },
    {
        data_aos : "fade-right",
        img : ReactLogo,
        class_name : "ReactJS",
    },
    {
        data_aos : "fade-left",
        img : JSLogo,
        class_name : "JSLOGO",
    },
    {
        data_aos : "fade-right",
        img : BootstrapLogo,
        class_name : "BootstrapLogo",
    },
    {
        data_aos : "fade-left",
        img : htmlCssLogo,
        class_name : "HtmlCssLogo",
    }
]