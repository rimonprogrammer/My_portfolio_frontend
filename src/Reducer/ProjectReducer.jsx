const reducer = (state, action) =>{
    let { All_project } = state;

    switch (action.type) {
        case "SET_LOADING" :
            return{
                ...state,
                isLoading : true
            }
        
        
        case "FETCH_PROJECTS" :
            const feature = action.payload.filter((element) =>{
                return element.page === 1;
            })
            return{
                ...state,
                isLoading : false,
                project : feature,
                All_project : action.payload
            }

        
        case "SET_CATEGORY" :
            let categories = action.payload;

            let category_result;
            category_result = All_project.filter((element) =>{
                return element.category.toLowerCase() === categories;
            });

            if(categories === 'all'){
                category_result = All_project.filter((element) =>{
                    return element.page == 1;
                });
            }
            return{
                ...state,
                isLoading : false,
                project : category_result
            }

        case "SET_PAGINATION" :
            let page = action.payload;
            let number = parseInt(page);

            const pagination = All_project.filter((element) =>{
                return element.page === number;
            });
            return{
                ...state,
                isLoading : false,
                project : pagination
            }


        // single project start
        case "SET_SINGLE_LOADING" :
            return{
                ...state,
                isSingleLoading : true
            }

        case "PARTICULAR_PROJECTS" :
            return{
                ...state,
                isSingleLoading : false,
                SingleProject : action.payload
            }
        // single project end

        default:
            state;
    }
}

export default reducer;