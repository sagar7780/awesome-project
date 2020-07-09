import React, { Component } from 'react'

export default class SummaryCovid extends Component {
    render() {

        const {Summary,CurrentDate} = this.props;
        //console.log(CurrentDate);
        return (
            <div className="raw">
                 
                <div className="NewConfirmed">
                    <h1>New Confirmed</h1>
        <h3>{Summary.NewConfirmed}</h3>
        <h4>{new Date(CurrentDate).toDateString()}</h4>
                    
                    </div>   
                    <div className="TotalConfirmed">
            <h1>Total Confirmed</h1>
        <h3>{Summary.TotalConfirmed}</h3>
        <h4>{new Date(CurrentDate).toDateString()}</h4>
                    </div>

                    <div className="NewDeaths">
                        <h1>New Deaths</h1>
                        <h3>{Summary.NewDeaths}</h3>
        <h4>{new Date(CurrentDate).toDateString()}</h4>

                    </div>
                    <div className="TotalDeaths">
                        <h1>Total Deaths</h1>
        <h3>{Summary.TotalDeaths}</h3>
        <h4>{new Date(CurrentDate).toDateString()}</h4>
                   </div>

                   <div className="TotalRecovered">
                       <h1>Total Recovered</h1>
        <h3>{Summary.TotalRecovered}</h3>
        <h4>{new Date(CurrentDate).toDateString()}</h4>


                   </div>
                
            </div>
        )
    }
}
