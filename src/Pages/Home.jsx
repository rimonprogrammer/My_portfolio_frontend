import React, { useContext } from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import '../assets/css/Home.css';
import About_Me from '../Component/About_Me';
import My_Skills from '../Component/My_Skills';
import Portfolio from '../Component/Portfolio';
import Testimonial from '../Component/Testimonial';
import Footer from '../Component/Footer';
import FAQ from '../Component/FAQ';
import Contact_me from '../Component/Contact_me';
import { use_UI_Context } from '../ContextAPI/UIContext';
import Register from './../Authentication/Register';

function Home() {
document.title = 'Home || Rimon portfolio 2.0';

  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<
  const data = use_UI_Context();
  const { theme } = data;
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<

  document.body.style.backgroundColor = theme;

  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <About_Me />
        <My_Skills/>
        <Portfolio/>
        <FAQ/>
        <Contact_me/>
        {
          (localStorage.getItem('user-info')) ? '' : <Register/>
        }
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home