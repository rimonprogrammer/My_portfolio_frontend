import React from 'react';
import '../assets/css/Portfolio.css';
import '../assets/css/common.css';
import { useProjectContext } from '../ContextAPI/ProjectContext.jsx';
import { Link } from 'react-router-dom';
import spinner from '../assets/img/spinner.gif'

function Portfolio() {
  const {isLoading, project, paginationClick, pageNo, TabBtn, indexNo} = useProjectContext();

  return (
    <div className='container' id='my_portfolio'>
        <div className="my_portfolio">
            <h3 className='animate heading_alement'><p data-aos='zoom-in'>MY<span> Projects</span></p></h3>
            <div className="Tab_btn_aria" data-aos='zoom-in'>
                {
                  categories.map((element, index)=>{
                    const {category} = element;

                    return (
                        <button 
                            key={index} 
                            onClick={()=> TabBtn(category, index)} 
                            className={`${index === indexNo ? 'select_tab' : ''} tab_button`}>
                            {category}
                        </button>
                      )
                  })
                }
            </div>
            {
                isLoading ? 
                <div className='spinner'>
                    <img src={spinner} alt="spinner logo" />
                </div> :
                <div>
                    <div  className="react_project_box portfolio_All_box">
                        {
                            project.map((item, index)=>{
                              const {id, title, technology, featureImg} = item;

                              return(
                                  <div key={index} >
                                      <div data-aos='zoom-in'>
                                          <div className="portfolio_box animate">
                                              <img src={featureImg} alt={title} />
                                              <div className='p-2'>
                                                   <p>{featureImg}</p>
                                                   <h4 className='text-light m-0 mb-2 project-title'>{title}</h4>  
                                                  <p className='text-light m-0 '>Technology: {technology}</p>
                                                  <Link to={`/ParticularProject/${id}`} className='text-decoration-none'>
                                                        
                                                      <button className='view-details-btn'>View Details</button>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              )
                            })
                          }
                    </div>
                    {
                        indexNo == 0 ? 
                        <div className="pagination d-flex align-items-center">
                            <span className='text-light pt-2'>Page:</span> 
                            {
                                pagination.map((pages, index) =>{
                                  const {page} = pages;

                                    return(
                                      <button 
                                          onClick={paginationClick} 
                                          value={page} 
                                          key={index} 
                                          className={`${page == pageNo ? 'select_tab' : ''} pagination-btn mt-4 me-2`}
                                        >{page}
                                      </button>
                                    )
                                })
                            }
                        </div> : null
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default Portfolio;


const categories = [
    {
      category : "All"
    },
    {
      category : "E-commerce"
    },
    {
      category : "Educational"
    },
    {
      category : "News-APP"
    },
    {
      category : "Weather-APP"
    },
    {
      category : "Others"
    },
];

const pagination = [
    {
        page : 1
    },
    {
        page : 2
    },
    {
        page : 3
    }
];
