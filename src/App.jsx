import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About_US from "./Pages/About_US";
import PortfolioPage from "./Pages/PortfolioPage";
import { useEffect } from "react";
import Portfolio from "./Component/Portfolio";
import FAQ from "./Component/FAQ";
import Testimonial from './Component/Testimonial';
import My_Skills from "./Component/My_Skills";
import About_Me from "./Component/About_Me";
import './assets/css/index.css'
import VanillaTilt from 'vanilla-tilt';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import ParticularProject from "./Pages/ParticularProject";
import { use_UI_Context } from "./ContextAPI/UIContext";

function App() {
// ------- vanilla-tilt start ---------
useEffect(()=>{
  VanillaTilt.init(document.querySelectorAll(".animate"),{
      max : 20,
      speed : 50,
      glare : true,
      "max-glare" : 0.50
  });
});
// --------- vanilla-tilt end ----------

// --------- scroll animation ----------
useEffect(()=>{
  AOS.init({
      duration: 1000,
      once: true,
  });
});
// --------- scroll animation ----------


// ------ cursor section start here -------
useEffect(()=>{
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
  });

  function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          
          circle.style.scale = (circles.length - index) / circles.length;
          
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
      });
      requestAnimationFrame(animateCircles);
  };
animateCircles();
});
// ------ cursor section end here --------
  const { theme } = use_UI_Context();
  const themeColor = JSON.parse(localStorage.getItem('theme'));

  return (
    <div style={themeColor ? themeColor : theme}> 
      {/* ---------- cursor style --------- */}
        <div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div> 
      {/* ---------- cursor style --------- */}

        <Routes>
            {/* ------- pages route start ------ */}
            <Route path="/" element={<Home/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Portfolio" element={<PortfolioPage/>} />
            <Route path="/About_US" element={<About_US/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/ParticularProject/:id" element={<ParticularProject/>} />
            {/* ------- pages route end ------ */}

            {/* ------- component route start ------ */}
            <Route path="/About_Me" element={<About_Me/>} />
            <Route path="/My_Skills" element={<My_Skills/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Testimonial" element={<Testimonial/>} />
            <Route path="/FAQ" element={<FAQ/>} />
            {/* ------- component route end ------ */}
        </Routes>
    </div>
  )
}

export default App;
