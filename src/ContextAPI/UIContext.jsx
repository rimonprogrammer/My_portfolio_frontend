import React, {useState, createContext, useContext} from 'react';
import darkImg from '../assets/img/dark-mode-button.png';
import lightImg from '../assets/img/light-mode-button.png';

const UI_Context = createContext();

const UIContext = ({children}) => {
    const [modeImg, setModeImg] = useState(darkImg);
    const [theme, setTheme] = useState({backgroundColor : '#0F172A'});

    const modeChange = () =>{
        setModeImg(modeImg === darkImg ? lightImg : darkImg);
        localStorage.setItem('modeImg', JSON.stringify(modeImg === darkImg ? lightImg : darkImg))

        setTheme(theme.backgroundColor === '#0F172A' ? {backgroundColor : '#293341'} : {backgroundColor : '#0F172A'});
        localStorage.setItem("theme", JSON.stringify(theme.backgroundColor === '#0F172A' ? {backgroundColor : '#293341'} : {backgroundColor : '#0F172A'}));
      }

    // >>>>>>>>> alert starting <<<<<<<<<<<
    const [showAlert, setShowAlert] = useState({
      display : 'none' 
    })
    const [alertText, setAlertText] = useState('This is an alert')
    const alertToggle = () =>{
        if(showAlert.display == 'none'){
            setShowAlert({display : 'block'});
            setTimeout(()=>{
              setShowAlert({display : 'none'});
            }, 1300)
        }
      }
// >>>>>>>>> alert ending <<<<<<<<<<<
  return (
    <UI_Context.Provider value={{alertText, showAlert, modeChange, modeImg, theme }}>
        {children}
    </UI_Context.Provider>
  )
}

const use_UI_Context = () =>{
    return useContext(UI_Context);
}
export {UIContext, use_UI_Context};