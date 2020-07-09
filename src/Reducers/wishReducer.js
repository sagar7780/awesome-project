
    
    const wishReducer = (state=[],action) => {
        console.log(action);
        if(action.type === 'CHANE_NAME') {
            return {
                ...state,
                name :action.payload
               
            }
        }
        
        return state;
    }
    
    export default wishReducer;