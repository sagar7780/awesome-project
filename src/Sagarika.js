import React, { Component } from 'react'
import handleArmy from "./withArmy"


class Sagarika extends Component {


    render() {
        return (
            <div>
                 <h2>Camp : {this.props.camp}</h2>
                 <h4 onMouseOver={this.props.hochandlegunshots}>Sagarika have {this.props.hocgunname} and gunshots: {this.props.hocgunshots}</h4>
            </div>
        )
    }
}

export default handleArmy(Sagarika,20);