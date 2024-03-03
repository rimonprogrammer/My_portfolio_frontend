import React, { useEffect } from 'react';
import './Particular.css';
import { useProjectContext } from '../ContextAPI/ProjectContext';
import { useParams } from 'react-router-dom';
import Navbar from './../Component/Navbar';
import Footer from './../Component/Footer';
import { IoCheckmarkDone } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import spinner from '../assets/img/spinner.gif'

function ParticularProject() {
    const {id} = useParams();

    const {singleProjects, SingleProject, isSingleLoading} = useProjectContext();
    const { title, image, description, note, ImpTitle, implement, techTitle, technologies, liveURL, gitHubURL, linkedInURL, fbURL} = SingleProject;

    const url = 'https://my-portfolio-8lhd.onrender.com/projects'
    useEffect(()=>{
        singleProjects(`${url}/${id}`);
    }, []);
    return (
      <>
        <Navbar/>
        {
            isSingleLoading ?
            <div className='spinner'>
                <img src={spinner} alt="spinner logo" />
            </div> :
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-5">
                        <h5 className='text-light'>{title}</h5>
                        <p className='text-light'>{description}</p>
    
                        <div>
                            <h5 className='text-light mt-4'>{techTitle}</h5>
                            <ul className='p-0'>
                                {
                                    technologies ? 
                                    technologies.map((element, index) =>{
                                        return (
                                            <button key={index} className='button btn-sm'>
                                                {element.tech}
                                            </button>
                                        )
                                    }) : null
                                }
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-light mt-4'>{ImpTitle}</h5>
                            <ul className='p-0'>
                                {
                                    implement ? 
                                    implement.map((element, index) =>{
                                        return (
                                            <li key={index} className='text-light'>
                                                <IoCheckmarkDone className='me-2 check-mark' />
                                                {element.ImpTitle}
                                            </li>
                                        )
                                    }) : null
                                }
                            </ul>
                        </div>
                        <p className='text-light pt-3'>Note: {note}</p>
                        <div>
                            {
                                liveURL?
                                <a href={liveURL} target='_blank'>
                                    <FaEye className='project-social-icons' />
                                </a> : null
                            }
                            {
                                gitHubURL?
                                <a href={gitHubURL} target='_blank'>
                                    <FaGithub className='project-social-icons' />
                                </a> : null
                            }
                            {
                                linkedInURL?
                                <a href={linkedInURL} target='_blank'>
                                    <FaLinkedin className='project-social-icons' />
                                </a> : null
                            }
                            {
                                fbURL?
                                <a href={fbURL} target='_blank'>
                                    <FaFacebookSquare className='project-social-icons'/>
                                </a> : null
                            }
                        </div>
                    </div>
                    <div className="col-md-7 project-images">
                        {   image ? image.map((element, index) =>{
                                return <img key={index} src={element.img} alt={title} />
                            }) : null
                        }
                    </div>
                </div>
            </div>
        }
        <Footer/>
      </>
    )
}

export default ParticularProject