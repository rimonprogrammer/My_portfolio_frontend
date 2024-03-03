import '../assets/css/Blog.css'
import Navbar from '../Component/Navbar';
import React, {useState, useContext} from 'react';
import blogUploader from '../assets/img/me-removebg.png';
import react from '../assets/img/React-icon.svg.png';
import javascript from '../assets/img/javascriptLogo.png';
import bootstrap from '../assets/img/bootstrap.png';
import node_js from '../assets/img/node.js.png';
import express_js from '../assets/img/express.png';
import mongodb from '../assets/img/mongodb-logo.png';
import html from '../assets/img/html-logo.png';
import css from '../assets/img/css-logo.png';
import { use_UI_Context } from '../ContextAPI/UIContext';

function Blog() {
  document.title = 'Blog || Rimon portfolio 2.0';

  const data = use_UI_Context();
    const { theme } = data;
    document.body.style.backgroundColor = theme;

    const [likeColor, setlikeColor] = useState({color : 'white'})
    const [loveColor, setloveColor] = useState({color : 'white'})
    const like = () =>{
      setlikeColor(likeColor.color === 'white' ? {color : 'orangered'} : {color : 'white'} );
    }

    const love = () =>{
      setloveColor(loveColor.color === 'white' ? {color : 'orangered'} : {color : 'white'} );
    }

    const [toggle, setToggle] = useState('SeeMore');
    const toggleBtn = () =>{
      setToggle(toggle === 'SeeMore' ? 'SeeLess' : 'SeeMore');
    }
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="blog-section">
            {
              blogs.map((element, index)=>{
                const {img, date, uploaderImg, uploaderName, uploaderTitle, question1, details, description, question2} = element;
                return(
                  <div key={index} className='all_blogs'>
                      <div className='blog-img'>
                          <img src={img} alt="" />
                      </div>
                      <div className='all-blog-details'>
                          <span>{date}</span>
                          <div className='identity'>
                              <img src={uploaderImg} alt="" />
                              <div>
                                  <h6>{uploaderName}</h6>
                                  <p className='pt-1'>{uploaderTitle}</p>
                              </div>
                          </div>

                          <h4>{question1}</h4> 
                          <p>{details}</p>

                          <nav>
                              <details>
                                  <summary onClick={toggleBtn}>{toggle}</summary>
                                  <div >
                                    <p>{description}</p>

                                    <h5>{question2}</h5> 
                                    <ul>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans1}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans2}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans3}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans4}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans5}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans6}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question2Ans7}</li>
                                    </ul>

                                    <h5>{element.question3}</h5>
                                    <ul>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question3Ans1}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question3Ans2}</li>
                                        <li><i className="fa-solid fa-check-double"></i>{element.question3Ans3}</li>
                                    </ul>

                                    <h5 className='mt-5'>FAQ</h5>
                                    {/* -- faq 1 -- */}
                                    <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id1} data-bs-toggle="collapse">{element.FAQquestion1}</button>
                                            <div className={`accordion-collapse collapse show`} id={element.id1}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans1}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 1 -- */}

                                  {/* -- faq 2 -- */}
                                  <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id2} data-bs-toggle="collapse">{element.FAQquestion2}</button>
                                            <div className={`accordion-collapse collapse`} id={element.id2}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 2 -- */}

                                  {/* -- faq 3 -- */}
                                  <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id3} data-bs-toggle="collapse">{element.FAQquestion3}</button>
                                            <div className={`accordion-collapse collapse`} id={element.id3}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans3}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 3 -- */}

                                  {/* -- faq 4 -- */}
                                  <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id4} data-bs-toggle="collapse">{element.FAQquestion4}</button>
                                            <div className={`accordion-collapse collapse`} id={element.id4}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans4}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 4 -- */}

                                  {/* -- faq 5 -- */}
                                  <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id5} data-bs-toggle="collapse">{element.FAQquestion5}</button>
                                            <div className={`accordion-collapse collapse`} id={element.id5}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans5}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 5 -- */}

                                  {/* -- faq 6 -- */}
                                  <div className="accordion my-2 mt-2">
                                        <div className="accordion-item rounded-2 mt-2 animate">
                                            <button className="accordion-button user-select-none bg-dark-subtle text-dark b" data-bs-target={'#' + element.id6} data-bs-toggle="collapse">{element.FAQquestion6}</button>
                                            <div className={`accordion-collapse collapse`} id={element.id6}>
                                                <div className='accordion-body bg-dark text-light'>
                                                  <p className='user-select-none'>{element.FAQans6}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- faq 6 -- */}
                                </div>
                              </details>
                          </nav>
        
                          <div className='blog-footer'>
                              <p><i onClick={like} style={likeColor} className="fa-solid fa-thumbs-up"></i><span>{element.like}</span></p>
                              <p><i onClick={()=>love(element.love)} style={loveColor} className="fa-solid fa-heart"></i><span>{element.love}</span></p>
                              <p><i className="fa-regular fa-comment"></i><span>{element.comment}</span></p>

                              <div className='blog-social'>
                                <a href={element.React} target='_blank'><i className="fa-brands fa-react"></i></a>
                                <a href={element.LinkedIn} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                <a href={element.Facebook} target='_blank'><i className="fa-brands fa-facebook"></i></a>
                                <a href={element.Twitter} target='_blank'><i className="fa-brands fa-twitter"></i></a>
                              </div>
                         
                          </div>
                      </div>
                  </div>
                )
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Blog;

const blogs = [
  {
    id : 1,
    img : react,
    name : "React",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "React developer",
    uploaderImg : blogUploader,
    date : "- January 01, 2024 11:17 AM",
    question1 : "What is React and What is the advantage of React?",
    details : "React is the most popular open source Javascript library that was launched in 2011. React was created by developers at Facebook. React uses a 'Virtual DOM' which is very fast. ",
    description : "React also uses re-usable component-based architecture. Re-usable component simplifies the creation of a static/dynamic web application. React dealse with client-side and also complete server-side data processing and handiling. React can work with other frameworks and libraries.",
    question2 : "What are advantage of React?",
    question2Ans1 : "React uses a virtual DOM which is very fast",
    question2Ans2 : "React uses re-usable component-based architecture",
    question2Ans3 : "React dealse with client-side and also complete server-side data processing and handiling",
    question2Ans4 : "React can work with other frameworks and libraries.",
    question2Ans5 : "React is a cross platform and open source libraries.",
    question2Ans6 : "It's very easiy to maintain code and files in React.",
    question2Ans7 : "React aims to allow developers to create fast user interfaces for websites.",
    question3 : "What are disadvantage of React?",
    question3Ans1 : "React is not a good choich for a small application.",
    question3Ans2 : "React is not a complete framework hence calls for dependencies.",
    question3Ans3 : "Beginners might find it tough to cope with it's syntax and methods.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 171,
    love : 524,
    comment : 58,
  },
  {
    id : 2,
    img : javascript,
    name : "Javascript",
    uploaderName : "Rimon",
    uploaderTitle : "Javascript developer",
    uploaderImg : blogUploader,
    date : "- January 03, 2024 10:30 AM",
    question1 : "What is javascript and What is the advantage of javascript?",
    details : "JavaScript is a scripting language used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page. Features like: animated graphics",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of Javascript?",
    question2Ans1 : "Reduces load on the server",
    question2Ans2 : "Rich Interface",
    question2Ans3 : "Extended functionality",
    question2Ans4 : "Procedural programming features",
    question2Ans5 : "Interoperability",
    question2Ans6 : "Response to user activity",
    question2Ans7 : "Platform independence",
    question3 : "What are disadvantage of Javascript?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the JavaScript?",
    FAQquestion2 : "What is a JavaScript Variable and How to declare it?",
    FAQquestion3 : "What are JavaScript Operators and its Types?",
    FAQquestion4 : "What are the data types in JavaScript?",
    FAQquestion5 : "What is argument objects in JavaScript?",
    FAQquestion6 : "What are the scopes of a variable in JavaScript?",
    FAQans1 : "JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc",
    FAQans2 : "A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable. There are some rules while declaring a JavaScript variable (also known as identifiers). Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.",
    FAQans3 : "There are different types of JavaScript operators. That is Arithmetic operators, Assignment operators, Comparison operators, String operators, Logical operators, Bitwise operators, Ternary operators, Type operators etc.  ",
    FAQans4 : "There are some data type. Thease are String, Number, Boolean, Symbol, Null",
    FAQans5 : "JavaScript variable arguments represents the arguments that are passed to a function.",
    FAQans6 : "The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes. Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 210,
    love : 755,
    comment : 83,
  },
  {
    id : 6,
    img : bootstrap,
    name : "Bootstrap",
    uploaderName : "Rimon",
    uploaderTitle : "Bootstrap  developer",
    uploaderImg : blogUploader,
    date : "- January 05, 2024 9:20 PM",
    question1 : "What is Bootstrap and What is the advantage of Bootstrap?",
    details : "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.",
    description : "Bootstrap is a popular open-source front-end framework used for developing responsive, mobile-first web projects. It was created by Twitter and is now maintained by the open-source community. Bootstrap provides a set of pre-designed HTML, CSS, and JavaScript components, such as navigation bars, buttons, forms, and more, to help developers build consistent and visually appealing websites quickly.",
    question2 : "What are advantage of Bootstrap?",
    question2Ans1 : "Bootstrap is designed to be responsive, meaning that the layout of a website adjusts dynamically based on the screen size of the device used to view it. This ensures a consistent and user-friendly experience across various devices, including desktops, tablets, and smartphones.",
    question2Ans2 : "Bootstrap uses a 12-column grid system, making it easy to create responsive layouts. Developers can specify how many columns an element should span on different screen sizes, allowing for flexible and responsive designs",
    question2Ans3 : "Bootstrap includes a variety of CSS components like typography, forms, buttons, tables, and more. These components are styled and ready to use, saving developers time and effort in designing common elements",
    question2Ans4 : "It make easier to make responsive a website",
    question2Ans5 : "Bootstrap also comes with a set of JavaScript plugins that enhance the functionality of certain components. Examples include modal dialogs, carousels, tooltips, and popovers.",
    question2Ans6 : "While Bootstrap provides a default styling and structure, it is highly customizable. Developers can modify the framework to fit the specific design and branding requirements of their projects. Bootstrap can be customized using its source Sass files or by using the online customization tool.",
    question2Ans7 : "Bootstrap has a large and active community, which means there are plenty of resources, tutorials, and third-party themes available. The official documentation is comprehensive and serves as a helpful reference for developers",
    question3 : "What are disadvantage of Bootstrap?",
    question3Ans1 : "There need to remember many classes which is very mass.",
    question3Ans2 : "Bootstrap",
    question3Ans3 : "Bootstrap",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is Bootstrap and why it is used?",
    FAQquestion2 : "What is the main advantage of Bootstrap?",
    FAQquestion3 : "Who developed Bootstrap?",
    FAQquestion4 : "Is it important to learn Bootstrap?",
    FAQquestion5 : "Why bootstrap your startup?",
    FAQquestion6 : "Is it difficult to learn Bootstrap?",
    FAQans1 : "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.",
    FAQans2 : "Bootstrap provides extensive customization options, allowing you to modify the colors, typography, spacing, and other visual aspects of its components. You can override the default CSS framework classes provided by Bootstrap or add your own styles to achieve the desired look and feel for your website.",
    FAQans3 : "Bootstrap is a powerful front-end development library created by former Twitter employees Mark Otto and Jacob Thornton that includes pre-built HTML, CSS and JS components for building mobile-first responsive websites of all sizes and complexity.",
    FAQans4 : "Bootstrap is a valuable skill to have as a Front-End Engineer. The best part about Bootstrap is that it builds on other front-end development skills such as CSS, HTML, and JavaScript. In fact, you can learn Bootstrap with our courses in just a few hours and start building your first Bootstrap website in no time at all.",
    FAQans5 : "Bootstrapped startups are typically profitable faster, though it may come at the cost of slowed overall growth. You have less outside interference. Some founders prefer to work alone. Bootstrapping prevents you from having to answer to any outside forces or deal with any external influence.",
    FAQans6 : "Bootstrap is not difficult to learn if you have a basic understanding of CSS and HTML. If you're using the JavaScript plugins, a basic understanding of how JavaScript works is recommended.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 120,
    love : 209,
    comment : 34,
  },
  {
    id : 1,
    img : css,
    name : "CSS",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "CSS developer",
    uploaderImg : blogUploader,
    date : "- January 01, 2024 11:17 AM",
    question1 : "What is CSS and What is the advantage of CSS?",
    details : "CSS full meaning of Cascading Style Sheet. CSS make style of a website.",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of CSS?",
    question2Ans1 : " Speed",
    question2Ans2 : "Reduces load on the server",
    question2Ans3 : "Ease of use",
    question2Ans4 : "Rich Interface",
    question2Ans5 : "Versatility",
    question2Ans6 : "Extended functionality",
    question2Ans7 : "Procedural programming features",
    question3 : "What are disadvantage of CSS?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 193,
    love : 206,
    comment : 16,
  },
  {
    id : 1,
    img : html,
    name : "HTML",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "HTML developer",
    uploaderImg : blogUploader,
    date : "- January 01, 2024 11:17 AM",
    question1 : "What is HTML and What is the advantage of HTML?",
    details : "HTML full meaning of HyperText Markup Language. HTML make structure of a website.",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of HTML?",
    question2Ans1 : " Speed",
    question2Ans2 : "Reduces load on the server",
    question2Ans3 : "Ease of use",
    question2Ans4 : "Rich Interface",
    question2Ans5 : "Versatility",
    question2Ans6 : "Extended functionality",
    question2Ans7 : "Procedural programming features",
    question3 : "What are disadvantage of HTML?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 169,
    love : 172,
    comment : 48,
  },
  {
    id : 3,
    img : node_js,
    name : "Node.js",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "Node.js developer",
    uploaderImg : blogUploader,
    date : "- January 09, 2024 11:17 AM",
    question1 : "What is Node and What is the Node of javascript?",
    details : "Node is a Javascript library",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of Javascript?",
    question2Ans1 : " Speed",
    question2Ans2 : "Reduces load on the server",
    question2Ans3 : "Ease of use",
    question2Ans4 : "Rich Interface",
    question2Ans5 : "Versatility",
    question2Ans6 : "Extended functionality",
    question2Ans7 : "Procedural programming features",
    question3 : "What are disadvantage of Javascript?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 190,
    love : 368,
    comment : 48,
  },
  {
    id : 4,
    img : express_js,
    name : "Express.js",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "Express.js developer",
    uploaderImg : blogUploader,
    date : "- January 04, 2024 9:25 PM",
    question1 : "What is Express and What is the advantage of Express?",
    details : "Express.js is a Javascript library",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of Express?",
    question2Ans1 : " Speed",
    question2Ans2 : "Reduces load on the server",
    question2Ans3 : "Ease of use",
    question2Ans4 : "Rich Interface",
    question2Ans5 : "Versatility",
    question2Ans6 : "Extended functionality",
    question2Ans7 : "Procedural programming features",
    question3 : "What are disadvantage of Express?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 238,
    love : 303,
    comment : 41,
  },
  {
    id : 5,
    img : mongodb,
    name : "MongoDB",
    uploaderName : "Rimon (admin)",
    uploaderTitle : "MongoDB maintaincer",
    uploaderImg : blogUploader,
    date : "- January 11, 2024 10:30 AM",
    question1 : "What is MongoDB and What is the advantage of MongoDB?",
    details : "MongoDB is a data base. We can store data in MongoDB database.",
    description : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
    question2 : "What are advantage of MongoDB?",
    question2Ans1 : " Speed",
    question2Ans2 : "Reduces load on the server",
    question2Ans3 : "Ease of use",
    question2Ans4 : "Rich Interface",
    question2Ans5 : "Versatility",
    question2Ans6 : "Extended functionality",
    question2Ans7 : "Procedural programming features",
    question3 : "What are disadvantage of MongoDB?",
    question3Ans1 : "Client-Side Security Risk",
    question3Ans2 : "Different Interpretation Across Browsers",
    question3Ans3 : "Time-Consuming, especially with low network.",
    id1 : "FAQ1",
    id2 : "FAQ2",
    id3 : "FAQ3",
    id4 : "FAQ4",
    id5 : "FAQ5",
    id6 : "FAQ6",
    FAQquestion1 : "What is the Virtual DOM?",
    FAQquestion2 : "What is the different between real DOM and Virtual DOM?",
    FAQquestion3 : "What is the state in React?",
    FAQquestion4 : "What are React component",
    FAQquestion5 : "What is the props in React?",
    FAQquestion6 : "Why need React althoughwe have HTML, CSS and Javascript?",
    FAQans1 : "A virtual DOM is a simple javascript object that is the exact copy of the corresponding real DOM. It can be considered as a node tree that consists of the element, their attributes, and other properties. A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly.",
    FAQans2 : "A virtual DOM update the UI without re-render the entire page and it can't update HTNL directly but the real DOM re-renders the entire page if the UI gets updated and it can change HTML directly.",
    FAQans3 : "In React. states are used to easily creation dynamic interactive component.",
    FAQans4 : "In React, components is re-usable building block for creation user interface.",
    FAQans5 : "Props are a way to pass data to child component from parent component",
    FAQans6 : "React simplifies the creation of single page application by using re-usable component.",
    React : "https://react.dev/blog",
    LinkedIn : "https://www.linkedin.com/groups/8552353/?showWelcomeNote=true",
    Facebook : "https://www.facebook.com/groups/1989815967951521",
    Twitter : "https://twitter.com/ReactjsParis",
    like : 124,
    love : 294,
    comment : 19,
  },
]

