

const iState = {

name :'sagar',
wishes:['swim','singing']

}

const nameReducer = (state=iState,action) => {
    console.log(action);
    if(action.type === 'CHANE_NAME') {
        return action.payload
    }
    
    return state;
}

export default nameReducer;