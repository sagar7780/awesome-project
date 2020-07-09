import React, { Component } from 'react'

const handleArmy = (Men,shots) => {

class newMen extends Component {

    state = {
        gunshots:0
    }

    handleGunshots = () =>{
        this.setState({gunshots:this.state.gunshots + shots})
    }

    render(){

        return < Men hocgunname="AK 47"
         hocgunshots={this.state.gunshots}
          hochandlegunshots={this.handleGunshots}
          {...this.props}
          />
        
    }
}
 return newMen;
}

export default handleArmy;