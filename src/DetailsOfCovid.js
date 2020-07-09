import React, { Component } from 'react'
import axios from "axios"
import SummaryCovid from './SummaryCovid';
import CountriesCovid from './CountriesCovid';

export default class DetailsOfCovid extends Component {


    state = {
        countries:[],
        global:[],
        currentDate:null,
        loading: true    
    }


    //for fetch api
    async componentDidMount(){

      const responce = await  axios.get("https://api.covid19api.com/summary");
      console.log(responce);
      this.setState({countries: responce.data.Countries});
      this.setState({global: responce.data.Global});
      this.setState({currentDate: responce.data.Date});
      this.setState({loading:false});

    }

    render() {
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <SummaryCovid Summary={this.state.global} CurrentDate={this.state.currentDate}/>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>New Confirmed</th>
                            <th>Total Recoverd</th>
                            <th>Total Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(Country =>  (
                            <CountriesCovid countries = {Country} key={Country.Country} />
                        ) )}
                    </tbody>
                </table>
            </div>
        )
    }
}
