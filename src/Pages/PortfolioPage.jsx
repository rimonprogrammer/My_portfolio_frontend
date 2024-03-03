import Navbar from '../Component/Navbar'
import Portfolio from '../Component/Portfolio'
import React, { useContext } from 'react';
import Footer from './../Component/Footer';
import { use_UI_Context } from '../ContextAPI/UIContext';

function PortfolioPage() {
  document.title = 'Work Portfolio || Rimon portfolio 2.0';
  
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<
  const data = use_UI_Context();
  const { theme } = data;
  // >>>>>>>>>>>> theme & alert <<<<<<<<<<<<<

  document.body.style.backgroundColor = theme;
  return (
    <div>
        <Navbar/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default PortfolioPage