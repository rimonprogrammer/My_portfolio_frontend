import React from 'react';
import '../assets/css/FAQ.css';
import { useFAQContext } from '../ContextAPI/FAQContext';
import spinner from '../assets/img/spinner.gif'

function FAQ() {
    const {faq, loading} = useFAQContext();

  return (
        <div className='container pt-5' id='faq'>
        <h3 className='mt-4 animate heading_alement'><p data-aos='zoom-in'>FAQ</p></h3>
        {
            loading ?
            <div className='spinner'>
                <img src={spinner} alt="spinner" />
            </div> :
            <div className="container faq-box mt-4">
            {
              faq.map((accordion, index)=>{
                  return(
                    <div key={index} className="accordion mt-2" data-aos='zoom-in'>
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
        }
    </div>
  )
}


export default FAQ;


