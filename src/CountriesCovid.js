import React, { Component } from 'react'

export default class CountriesCovid extends Component {
    render() {
        const {countries} = this.props;
        // console.log(countries);
        return (
           
                <tr>
        <td>{countries.Country}</td>
        <td>{countries.NewConfirmed}</td>
        <td>{countries.TotalRecovered}</td>
        <td>{countries.TotalDeaths}</td>
                </tr>
            
        )
    }
}
