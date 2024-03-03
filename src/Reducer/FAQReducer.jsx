const reducer = ( state, action ) =>{
    switch(action.type){
        case "SET_FAQ_LOADING" :
            return{
                ...state,
                loading : true
            }

        case "SET_FAQ" : 
            return{
                ...state,
                loading : false,
                faq : action.payload
            }

        default :
            state
    }
}

export default reducer;