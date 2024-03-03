import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import logo from '../assets/img/logo.png';
import barImg from '../assets/img/bar.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { use_UI_Context } from '../ContextAPI/UIContext';
import Alert from './Alert';
import { FaUserPlus } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate()

    const { alertText, showAlert, modeImg, modeChange, theme } = use_UI_Context();

    const location = useLocation();

    // sticky navbar start
    const [sticky, setSticky] = useState('');
    const [stickyTheme, setStickyTheme] = useState('')
    const stickyNav = () =>{
        if(window.scrollY > 0){
            setSticky('fixed-top');
            setStickyTheme('sticky')
        }
        else{
            setSticky('');
            setStickyTheme('')
        }
    }
    document.addEventListener("scroll", stickyNav);
    // sticky navbar end

    const loginBtnClick = () =>{
        navigate('/Login');
    }
    const logoutBtn = () =>{
        localStorage.clear();
        navigate('/');
    }

    const themeColor = JSON.parse(localStorage.getItem('theme'));
    const img = JSON.parse(localStorage.getItem('modeImg'));

  return (
    <header style={themeColor ? themeColor : theme } className={`${sticky} ${stickyTheme}`}>
        <div className="progress"></div> {/* progressbar start */}
        <Alert showAlert={showAlert} alertText={alertText} /> 

        <nav className="navbar navbar-expand-lg container" id='return_Home'>
            <a href="/" className="navbar-brand d-flex align-items-center animate rounded-3 text-light">
                <img src={logo} alt="navbar-img"/>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#CollapseID"><img src={barImg} alt="navbar-img"/></button>
            <div className="navbar-collapse collapse" id="CollapseID">
                <ul className="navbar-nav m-auto  ">
                    <li className="nav-item d-flex justify-content-center"><Link className={`nav-link  ${location.pathname === '/' ? 'activeted' : ''}`} to='/'>Home</Link></li>
                    <li className="nav-item d-flex justify-content-center"><Link className={`nav-link  ${location.pathname === '/About_US' ? 'activeted' : ''}`} to='/About_US'>About-Me</Link></li>
                    <li className="nav-item d-flex justify-content-center"><Link className={`nav-link  ${location.pathname === '/Portfolio' ? 'activeted' : ''}`} to='/Portfolio'>Portfolio</Link></li>
                    <li className="nav-item d-flex justify-content-center"><Link className={`nav-link  ${location.pathname === '/Blog' ? 'activeted' : ''}`} to='/Blog'>Blog</Link></li>
                </ul>
            </div>
            <div className='login-and-theme me-2'>
                <img onClick={modeChange} src={img ? img : modeImg} alt="bg color mode image" />
                {
                    (localStorage.getItem('user-info')) ? <button className='button btn-sm' onClick={logoutBtn}> Logout</button> 
                    : <button onClick={loginBtnClick} className='button btn-sm'><FaUserPlus className='me-1' />Login</button> 
                }

            </div>
        </nav>
    </header>
  )
}

export default Navbar;