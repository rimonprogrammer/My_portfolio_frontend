import React, { useState } from 'react';
import './authentication.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { use_UI_Context } from '../ContextAPI/UIContext';
import Navbar from '../Component/Navbar';

function Register() {
    // const alert = {
    //     position: "top-center",
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Bounce,
    // };
    const data = use_UI_Context();
    const { theme } = data;
    
    document.body.style.backgroundColor = theme;

    const location = useLocation();
    const navigate = useNavigate();

    const navigatePage = () =>{
        navigate('/Login')
    };

    const [checkType, setCheckType] = useState('password');
    const [eyeColor, setEyeColor] = useState({color : 'rgb(199, 199, 199)'})
    const tooglePassword = () =>{
        setCheckType(`${checkType === 'password' ? 'text' : 'password'}`);
        setEyeColor(eyeColor.color === 'rgb(199, 199, 199)' ? {color : 'orangered'} : {color : 'rgb(199, 199, 199)'})
    };

    const [values, setValues] = useState({
        username : '',
        email : '',
        password : ''
    })

    const handleChange = (e) =>{
        setValues({...values, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {username, email, password} = values;

        if(username.length < 3){
            alert('Username must be at least 3 character')
            // toast.error('Username must be at least 3 character', alert);
        }
        if(email.length === '' || !email.includes('@') || !email.includes('.' || !email.includes('com'))){
            alert('Please enter a valid email')
            // toast.error('Please enter a valid email', alert);
        }
        if(password.length < 6){
            alert('Password must be at least 6 character')
            // toast.error('Password must be at least 6 character', alert);
        }
        else{
            const {data} = await axios.post('https://my-portfolio-8lhd.onrender.com/api/auth/register', {
                username,
                email,
                password
            })

            if(data.status === 'true'){
                alert('Register successfully');
                // toast.success('Register successfully', alert);
                localStorage.setItem('user-info', JSON.stringify(data.user));
                navigate('/');
            }
            if(data.status === 'false'){
                alert(data.msg);
                // toast.error(data.msg, alert);
            }
        }
    }

  return (
    <>
        <div className='container'>
            {
                location.pathname === '/Register' ? <Navbar/>  : null
            }
            <h3 className='animate heading_alement'><p data-aos='zoom-in'>Sign<span> Up</span></p></h3>
            <div className='authentication'>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <input onChange={(e) =>handleChange(e)} type="text" name="username" placeholder='Enter Your Name' />
                    <input onChange={(e) =>handleChange(e)} type="email" name="email" placeholder='Enter Your Email' />
                    <div className='password_aria'>
                        <input onChange={(e) =>handleChange(e)} className='password' type={checkType} name="password" placeholder='Enter Your password' />
                        <i onClick={tooglePassword} style={eyeColor} className={`show_icon fa-solid ${checkType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </div>
                    <div>
                        <button type='submit' className="w-100 common-btn mt-5 animate">
                            <i></i><i></i><span>Signup</span>
                        </button>
                    </div>
                    <span className='pt-3'>OR,</span>
                    <p className='p-0 m-0'>Already have an account?</p>
                    <div>
                        <button onClick={navigatePage} className="w-100 common-btn mt-5 animate">
                            <i></i><i></i><span>Login</span>
                        </button>
                    </div>
                    <ToastContainer 
                        position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition = {Bounce}
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default Register