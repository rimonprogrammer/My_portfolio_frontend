import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import reducer from '../Reducer/FAQReducer';

const FAQ_Context = createContext();

function FAQContext({children}) {
    const initialState = {
        loading : false,
        faq : []
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const getFAQ = async () =>{
        dispatch({type : "SET_FAQ_LOADING"});
        const { data } = await axios.get('https://my-portfolio-8lhd.onrender.com/FAQ');

        dispatch({type : "SET_FAQ", payload : data});
    }
    useEffect(()=>{
        getFAQ()
    }, []);
  return (
    <FAQ_Context.Provider value={{...state}}>
        {children}
    </FAQ_Context.Provider>
  )
}

const useFAQContext = () =>{
    return useContext(FAQ_Context);
}
export {FAQContext, useFAQContext}