import '../assets/css/common.css';
import '../assets/css/About_Me.css';
import My_intro from './My_intro';
import { Link } from 'react-router-dom';
import rightArrow from '../assets/img/right-arrow.png'

function About_Me(props) {
  return (
    <div className='container' id='about_me'>
        <h3 className='animate heading_alement'><p data-aos='zoom-in'>Who <span>AM I?</span></p></h3>
        <div className="row about_section">
            <div  data-aos='fade-right' className="my-intro col-lg-5 rounded-3">
                <My_intro/>
            </div>
            <div className="col-lg-7 about_text animate rounded-3">
                <div data-aos='fade-left'>
                    <p style={props.mode} className='pt-3'>Hi, This is</p>
                    <p style={props.mode}>MD: Nobenur Islam Rimon</p>
                    <p style={props.mode} className='user-select-none'>
                    Highly motivated Junior Front-end Web developer with a strong foundation in HTML, CSS, Bootstrap, JavaScript, and React-JS. Eager to contribute creativity and technical skills to dynamic projects, enhancing user experiences through a responsive and visually appealing web interface.
                    I’ve 1+ years of experience and as a professional junior web application developer new technology learning is my passion</p>
                    <ul className='skills_button mt-3'>
                        {
                            technologys.map((element, index)=>{
                                return <button key={index}>{element.name}</button>
                            })
                        }
                    </ul>
                    <Link to='/About_US'>
                        <button className="mt-4 animate button">
                            <span>More details <img className='w-25' src={rightArrow} alt="" /> </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_Me;

const technologys = [
    {
        name : "HTML"
    },
    {
        name : "CSS"
    },
    {
        name : "Bootstrap"
    },
    {
        name : "Javascript"
    },
    {
        name : "React"
    },
    {
        name : "jQuery"
    },
    {
        name : "Node.js"
    },
    {
        name : "Express.js"
    },
    {
        name : "MongoDB"
    },
]