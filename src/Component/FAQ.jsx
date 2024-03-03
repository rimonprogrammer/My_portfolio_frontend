import React from 'react';
import '../assets/css/FAQ.css';

function FAQ() {
  return (
    <div className='container pt-5' id='faq'>
        <h3 className='mt-4 animate heading_alement'><p data-aos='zoom-in'>FAQ</p></h3>
        <div className="container faq-box mt-4">
                {
                  faq.map((accordion, index)=>{
                      return(
                        <div key={index} className="accordion mt-2">
                            <div className="accordion-item rounded-2 animate">
                                <button className="accordion-button user-select-none text-dark" data-bs-target={'#'+accordion.catagory} data-bs-toggle="collapse">{accordion.header}</button>
                                <div className={`accordion-collapse collapse ${accordion.id == 1 ? 'show' : ''}`} id={accordion.catagory}>
                                    <div className="accordion-body">
                                      <p className='user-select-none'>{accordion.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )
                  })
                }
          </div>
    </div>
  )
}

const faq = [
  {
      id : 1,
      catagory : "accordion1",
      data_bs : 'fade-right',
      header : "We need an expert front-end developer who has also intermediate-level experience in the backend. Do you have backend knowledge?",
      body : "Yes of course! Although I am a Front-end developer, but also I have intermediate-level experience in node.js, express.js, and MongoDB database and now I'm learning node, express and mongoDB"
  },
  {
      id : 2,
      catagory : "accordion2",
      data_bs : 'fade-left',
      header : "How many days of experience do you have?",
      body : "I have 1+ years of experience in web development sector."
  },
  {
      id : 3,
      catagory : "accordion3",
      data_bs : 'fade-right',
      header : "In which technologies are you an expert?",
      body : "I am an expert in HTML 5, CSS 3, Bootstrap 5, Modern Javascript (es-6), and React.js. I have also an intermediate-level experience in jQuery, mongoose, bcrypt.js, node.js, express.js and Mongodb database."
  },
  {
      id : 4,
      catagory : "accordion4",
      data_bs : 'fade-left',
      header : "In which tools do you know to use?",
      body : "Git & GitHub(to keep my code), Visual Studio Code (as a code editor). Netlify and Vercel (to deploy website)."
  }
  ,
  {
      id : 5,
      catagory : "accordion5",
      data_bs : 'fade-right',
      header : "What is the React? And what is the advantage of React?",
      body : "React is an open-source javascript library that was launched in 2011 and it was created by developers at Facebook. React uses Virtual DOM which is very fast and it uses re-usable component-based architecture that simplifies the creation of a web application. It deals with complete client-side and server-side data processing and handling."
  }
  ,
  {
      id : 5,
      catagory : "accordion6",
      data_bs : 'fade-left',
      header : "What is the Virtual DOM?",
      body : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly."
  }
  ,
  {
      id : 5,
      catagory : "accordion7",
      data_bs : 'fade-right',
      header : "What is the different between real DOM and Virtual DOM?",
      body : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly."
  }
  ,
  {
      id : 5,
      catagory : "accordion8",
      data_bs : 'fade-left',
      header : "What is the JSX? Can browser read a JSX file?",
      body : "JSX mean Javascript XML. JSX is a syntax extension used by React to write HTML-like code. No, the browser can't read JSX files directly. It can read only objects provided by JavaScript. JSX use a transformer (Babel) to transform JSX code to a Javascript object."
  }
];

export default FAQ;


