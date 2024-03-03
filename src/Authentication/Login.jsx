import React, { useState } from 'react';
import './authentication.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { use_UI_Context } from '../ContextAPI/UIContext';
import Navbar from '../Component/Navbar';
import Footer from './../Component/Footer';

function Login() {
    const data = use_UI_Context();
    const { theme } = data;

    document.body.style.backgroundColor = theme;

    const navigate = useNavigate();
    
    const navigatePage = () =>{
        navigate('/Register')
    };

    const [checkType, setCheckType] = useState('password');
    const tooglePassword = () =>{
        setCheckType(`${checkType === 'password' ? 'text': 'password'}`);
    };

    // ---- data sent on server ----
    const [values, setValues] = useState({
        email : '',
        password : ''
    });

    const handleChange = (e) =>{
        setValues({...values, [e.target.name] : e.target.value});
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const {email, password} = values;

        if(email === '' || !email.includes('@gmail.com')){
            alert('Please enter a valid email');
        }
        if(password.length < 6){
            alert('Password must be at least 6 character')
        }
        else{
            const {data} = await axios.post('https://my-portfolio-8lhd.onrender.com/api/auth/login', {
                email,
                password
            });
            if(data.status === 'true'){
                alert("Login successfully")
                localStorage.setItem('user-info', JSON.stringify(data.user));
                navigate('/');
            }
            if(data.status === 'false'){
                alert(data.msg);
            }
        }
    }
  return (
    <>  <Navbar/>
        <div className='container'>
            <h3 className='animate heading_alement'><p data-aos='zoom-in'>Login</p></h3>
            <div className='authentication'>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <input onChange={(e)=> handleChange(e)} type="email" name="email" placeholder='Enter Your email'  />
                    <div className='password_aria'>
                        <input onChange={(e)=> handleChange(e)} className='password' type={checkType} name="password" placeholder='Enter Your password'  />
                        <i onClick={tooglePassword} className={`show_icon fa-solid ${checkType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </div>
                    <div>
                        <button type='submit' className="w-100 common-btn mt-5 animate">
                            <i></i><i></i><span>Login</span>
                        </button>
                    </div>
                    <span className='pt-3'>OR,</span>
                    <p className='p-0 m-0'>You have no account?</p>
                    <div>
                        <button onClick={navigatePage} type='submit' className="w-100 common-btn mt-5 animate">
                            <i></i><i></i><span>Register</span>
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
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
        </div>
    </>
  )
}

export default Login;