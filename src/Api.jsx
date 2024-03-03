import NewsApp from './assets/img/NewsApp-React.png';
import MyPortfolio from './assets/img/PortfolioReact.png';
import TextUtils from './assets/img/TextUtilsReact.png';
import RandomPassGenReact from './assets/img/RandomPassGenReact.png';
import Weather_APP_React from './assets/img/Weather_App_React.png';
// ------------------ react end--------------------
import chair from './assets/img/chair_Bootstrap.png';
import home from './assets/img/home_Bootstrap.png';
import e_kinun from './assets/img/E-kinun (1).png';
import school from './assets/img/school.png';
import cuda from './assets/img/cuda.png';
import CarHub from './assets/img/car.png'
import dpi from './assets/img/dpi.png';
import portfolioImg from './assets/img/portfolio website_Bootstrap.png';
// ------------------ bootstrap end--------------------

import WeatherApp from './assets/img/weatherAppJS.png';
import PassGen from './assets/img/RandomPassGen_JS.png';


const ApiData = [
    {
        id : 6,
        btnID : 2,
        catagory : "E-Commerce",
        technology : "JavaScript",
        title : "Comforty E-commerce website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Chair selling E-commerce project. This website I have made using HTML, CSS, Bootstrap, Javascript, and AOS animation. In the slider section of this website, I have created using JavaScript and animation havecreated using AOS.",
        img : chair,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/Comforty-E-commerce",
        LiveURL : "https://rimonprogrammer.github.io/Comforty-E-commerce/"
    },
    {
        id : 7,
        catagory : "E-Commerce",
        technology : "JavaScript",
        title : "REIS E-commerce website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Home selling E-commerce project. This website I have made using HTML, CSS, Bootstrap, Javascript, and AOS animation.",
        img : home,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/REIS-E-commerceWeb",
        LiveURL : "https://rimonprogrammer.github.io/REIS-E-commerceWeb/"
    },
    {
        id : 8,
        catagory : "E-Commerce",
        technology : "JavaScript",
        title : "BD Shop E-commerce Business website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is an E-commerce business website. This website have made with HTML, CSS, Bootstrap, Javascript, and AOS.",
        img : e_kinun,
        facebookURL : "https://www.facebook.com/photo?fbid=316791777982814&set=a.147450374916956",
        linkedInURL : "https://www.linkedin.com/feed/update/urn:li:activity:7143795933346996225/",
        githubURLs : "https://github.com/rimonprogrammer/BD-Shop-E-CommerceWeb",
        LiveURL : "https://rimonprogrammer.github.io/BD-Shop-E-CommerceWeb/"
    },
    {
        id : 9,
        catagory : "E-Commerce",
        technology : "JavaScript",
        title : "CarHub E-commerce website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is an E-commerce Bootstrap project. This website have made with HTML, CSS, Bootstrap, Javascript, and AOS.",
        img : CarHub,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/CarHub-E-commerce",
        LiveURL : "https://rimonprogrammer.github.io/CarHub-E-commerce/"
    },
    {
        id : 2,
        catagory : "Portfolio",
        technology : "React",
        title : "My Portfolio website using React.js, node.js and MongoDB",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is my Portfolio project. Here you can learn about me and my all details, watch my portfolio and work skills, you can contact me and you can order me here. If you are happy to visit my website, you can subscribe to me. Thank you. Have a nice day!!",
        img : MyPortfolio,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "",
        LiveURL : "https://rimonprogrammer.netlify.app/"
    },
    {
        id : 10,
        catagory : "Portfolio",
        technology : "Bootstrap",
        title : "Systematic Portfolio website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Portfolio website. This website have made with HTML, CSS, Bootstrap, and AOS",
        img : portfolioImg,
        facebookURL : "https://www.facebook.com/photo?fbid=282535551408437&set=a.147450374916956",
        linkedInURL : "https://www.linkedin.com/feed/update/urn:li:activity:7121906509336256512/",
        githubURLs : "https://github.com/rimonprogrammer/Systematic-Portfolio",
        LiveURL : "https://rimonprogrammer.github.io/Systematic-Portfolio/"
    },
    {
        id : 11,
        catagory : "Portfolio",
        technology : "jQuery",
        title : "Get-Freelancers Portfolio website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a portfolio website. This website have made with HTML, CSS, Bootstrap, jQuery, and AOS.",
        img : cuda,
        facebookURL : "https://www.facebook.com/photo?fbid=281265061535486&set=a.147450374916956",
        linkedInURL : "https://www.linkedin.com/feed/update/urn:li:activity:7121130066809405440/",
        githubURLs : "https://github.com/rimonprogrammer/Get-Freelancers-Portfolio",
        LiveURL : "https://rimonprogrammer.github.io/Get-Freelancers-Portfolio/"
    },
    {
        id : 3,
        catagory : "Weather",
        technology : "React",
        title : "Weather Application using React-JS",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Weather Application project. This project has been made with Open Weather API. Here you can see your area's weather, sky situation, sunset, humidity, pressure, wind speed, date and time. When you visit here for the first time you will see your area's weather and if you wanna see specific area weather you will search with this area's name",
        img : Weather_APP_React,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "",
        LiveURL : "https://weather-app-get-weather.netlify.app/"
    },
    {
        id : 1,
        catagory : "News",
        technology : "React",
        title : "International News App using News API",
        Note : "At first, I'm saying sorry!! I have made this project with a free news API. But they aren't providing to allow this project to live in this free version. That's why I couldn't deploy this project live.",
        description : "This is an International News App project. Here you can watch daily top and updated International news. I have added an awesome feature,  infinite scrolling. You can see news while you are scrolling and when the videos are finished, then you can't see new videos. There are six categories in the web application. These are science, Technology, Business, Sports, Health, entertainment etc.",
        img : NewsApp,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/Weather-App-JS",
        LiveURL : "https://rimonprogrammer.github.io/Weather-App-JS/"
    },
    {
        id : 12,
        catagory : "Educational",
        title : "University website",
        technology : "Bootstrap",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is an School website. This website have made with HTML, CSS, Bootstrap, and AOS.",
        img : school,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/University-EducationalWeb",
        LiveURL : "https://rimonprogrammer.github.io/University-EducationalWeb/"
    },
    {
        id : 13,
        catagory : "Educational",
        technology : "Bootstrap",
        title : "Darpon Ploytechnic website",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is an Collage website. This website have made with HTML, CSS, Bootstrap, and Javascript",
        img : dpi,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "",
        LiveURL : ""
    },
    {
        id : 17,
        catagory : "Weather",
        title : "Weather Application",
        technology : "JavaScript",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Weather Application project. This application is made with HTML, CSS, Javascript and Weather API. You can see your area's or anywhere weather and also Humanity and Wind speed. You can use it to get weather information.",
        img : WeatherApp,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "https://github.com/rimonprogrammer/Weather-App-JS-",
        LiveURL : "https://rimonprogrammer.github.io/Weather-App-JS-/"
    },
    {
        id : 4,
        catagory : "Others",
        technology : "React",
        title : "TextUtils || Text-modifier, Text counter, word counter",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a This is a Text modifier webapplication. Here you can modify your text. Such as you can convert your text upperCase to LowerCase and LowerCase to upperCase, you can remove extra spaces and also you can count words and characters and also know the reading time. If you like this application, you can use it.",
        img : TextUtils,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "",
        LiveURL : "https://textutils-word-counter-text-modifier.netlify.app/"
    },
    {
        id : 16,
        catagory : "Others",
        technology : "JavaScript",
        title : "Random Password Generator using JavaScript",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Random Password Generator project. This project is made by using HTML, CSS, and Javascript. You can easily generate a random password using this application. Also, you can change the password length and you can add numbers into the password.",
        img : PassGen,
        facebookURL : "https://www.facebook.com/photo?fbid=315928564735802&set=a.147450374916956",
        linkedInURL : "https://www.linkedin.com/feed/update/urn:li:activity:7143272764957790209/",
        githubURLs : "https://github.com/rimonprogrammer/Password-Generator-JS",
        LiveURL : "https://rimonprogrammer.github.io/Password-Generator-JS/"
    },
    {
        id : 5,
        catagory : "Others",
        technology : "React",
        title : "Random Password Generator using React",
        Note : "To visit the project click the live button that stays in the below.",
        description : "This is a Random Password Generator project. Here you can Generate a Random password which password is will be a unique password. Also, you can set character, length, password type and also you will get a feature like a clipboard copy.",
        img : RandomPassGenReact,
        facebookURL : "",
        linkedInURL : "",
        githubURLs : "",
        LiveURL : "https://random-password-generator-001.netlify.app/"
    },
];
  
export default ApiData;