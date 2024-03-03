import React from 'react';

function SkillsName() {
  return (
    <div className='skills'>
        {
            skill.map((skills, index)=>{
                return (
                    <div key={index} data-aos='zoom-in'>
                        <button className='button' key={index}>{skills.technology}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SkillsName;


const skill = [
    {
        technology: "HTML 5"
    },
    {
        technology: "CSS 3"
    },
    {
        technology: "Bootstrap 5"
    },
    {
        technology: "Javascript"
    },
    {
        technology: "Mordern Javascript (ES-6)"
    },
    {
        technology: "React.js"
    },
    {
        technology: "Node.js"
    },
    {
        technology: "Express.js"
    },
    {
        technology: "MongoDB"
    },
    {
        technology: "jQuery"
    },
    {
        technology: "Axios"
    },
    {
        technology: "Bcrypt-JS"
    },
    {
        technology: "Mongoose"
    },
    {
        technology: "XML"
    },
    {
        technology: "Json"
    },
    {
        technology: "Git"
    },
    {
        technology: "GitHub"
    },
    {
        technology: "Netlify"
    },
    {
        technology: "Vercel"
    },
    {
        technology: "Vanilla-tilt 3d effect"
    },
    {
        technology: "AOS Animation"
    },
    {
        technology: "Swiper Slider"
    },
    {
        technology: "React slick (Carousel)"
    },
    {
        technology: "Render (API Hosting)"
    },
    {
        technology: "Font awesome"
    },
    {
        technology: "Google Font"
    },
    {
        technology: "React-icons"
    },
    {
        technology: "React-toastify"
    }
];
