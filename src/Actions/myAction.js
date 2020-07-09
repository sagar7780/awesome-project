

const anotherName = () => {
    
 
    return async (dispatch) => {

        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(data);
        const res2 = await data.json()
       // console.log(res2);

        dispatch({type:"CHANE_NAME",payload:res2[0].name})
        console.log(dispatch({type:"CHANE_NAME",payload:res2[0].name}));
    }


}

export default anotherName;
