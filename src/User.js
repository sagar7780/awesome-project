import React, { Component } from 'react'

export default class User extends Component {

//old life cycle method
componentWillMount(){
    console.log("This component is mounted");
}

    render() {
        return (
            <div>
                <h1>This is User Component</h1>
            </div>
        )
    }
}
