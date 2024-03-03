import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import reducer from '../Reducer/ProjectReducer';

const Project_Context = createContext();

function ProjectContext({children}) {
    const initialState = {
        isLoading : false,
        project : [],
        All_project : [],
        filterProjects : [],
        isSingleLoading : false,
        SingleProject : []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // all projects fetching start
    const projects = async () =>{
        dispatch({type : "SET_LOADING"});

        const {data} = await axios.get('https://my-portfolio-8lhd.onrender.com/projects');

        dispatch({type : "FETCH_PROJECTS",  payload : data});
    }
    useEffect(()=>{
        projects();
    }, []);
    // all projects fetching end


    // particular projects fetching start
    const singleProjects = async (url) =>{
        dispatch({type : "SET_SINGLE_LOADING"});

        const {data} = await axios.get(url);

        dispatch({type : "PARTICULAR_PROJECTS", payload : data})
    }
    // particular projects fetching end


    // tab navigate start
    const [indexNo, setIndexNo] = useState(0)
    const TabBtn = (category, index) =>{
        setIndexNo(index);
        const categories = category.toLowerCase();

        dispatch({type : "SET_CATEGORY", payload : categories})
    }
    // tab navigate end

    // pagination start
    const [pageNo, setPageNo] = useState(1);
    const paginationClick = (e) =>{
        const page = e.target.value;
        setPageNo(page);

        dispatch({type : "SET_PAGINATION", payload : page});
    }
    // pagination end

    return(
        <Project_Context.Provider value={{...state, singleProjects, TabBtn, indexNo, paginationClick, pageNo}}>
            {children}
        </Project_Context.Provider>
    )
}

const useProjectContext = () =>{
    return useContext(Project_Context);
}
export {ProjectContext, useProjectContext}