import React, { Component } from 'react'

export default class Image extends Component {
    render() {

if(this.props.photo === "No Image"){

    throw new Error("No Image Found");
    
}


        return (
            <div>
                <img src={this.props.photo} alt="my Pic" width="500px"/>
            </div>
        )
    }
}
