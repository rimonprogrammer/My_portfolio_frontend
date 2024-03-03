import React from 'react';

function Skill_Ratio() {
  return (
    <>
          <section className="skill_ratio" id="skill">
            <div className="row mt-5 mb-5">
                {
                    skill_ratio.map((skill, index) =>{
                        const {data_aos, class_name, data_percentage, title} = skill;

                        return(
                            <div key={index} className="col-md-3" data-aos={data_aos}>
                                <div className="animate rounded-3">
                                    <svg className={`radial-progress ${class_name}`} data-percentage={data_percentage} viewBox="0 0 80 80">
                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                        <circle className="complete" cx="40" cy="40" r="35"></circle>
                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">{data_percentage}%</text>
                                    </svg>
                                    <h3 className='ps-5'>{title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Skill_Ratio;


const skill_ratio = [
    {
        data_aos : "fade-left",
        class_name : "react-js",
        data_percentage : "95",
        title : "REACT-JS"
    },
    {
        data_aos : "fade-down",
        class_name : "JAVASCRIPT",
        data_percentage : "65",
        title : "JAVASCRIPT"
    },
    {
        data_aos : "fade-right",
        class_name : "html-css",
        data_percentage : "95",
        title : "HTML / CSS"
    },
    {
        data_aos : "fade-down",
        class_name : "Bootstrap",
        data_percentage : "60",
        title : "Bootstrap"
    }
]