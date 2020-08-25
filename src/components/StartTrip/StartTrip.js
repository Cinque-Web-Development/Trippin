import React, { Component } from "react";
import "./StartTrip.css";
import Cities from '../../components/Cities'
import SearchBar from '../SearchBar'
import {getCity} from '../../services/googlePlacesService';

export default class StartTrip extends Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  submitCitySearch = async (event) => {
    event.preventDefault();
    console.log(this.state.term)
    const city = await getCity(this.state.term);
    console.log(city);
  }

  

  render() {
    return (
      <div>
        <SearchBar 
          term={this.state.term} 
          onInputChange={this.onInputChange}
          submitCitySearch={this.submitCitySearch}
        />
        {/* <Cities cities={cities}/> */}
      </div>
    );
  }
}
