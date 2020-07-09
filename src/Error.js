//for error  boundries

import React, { Component } from 'react'

export default class Error extends Component {

state = {
    hasError: false
}


//method for error boundries
static getDerivedStateFromError(error){

    return {hasError : true};
}

componentDidCatch(error,info){

    console.log(error);
    console.log(info);

}

    render() {
        if(this.state.hasError) {

            return <h3>Error : Image Not Found</h3>
        }
        return this.props.children;
    }
}
