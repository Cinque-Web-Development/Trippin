import React, { Component } from "react";
import "./StartTrip.css";
import Cities from '../../components/Cities'
import SearchBar from '../SearchBar'
import {getCity} from '../../services/googlePlacesService';

export default class StartTrip extends Component {
  state = {
    formData: {
      term: ""
    },
  };

  onInputChange = (event) => {
    const formData = {term: event.target.value}
    this.setState({formData})
  }

  submitCitySearch = async (event) => {
    event.preventDefault();
    console.log(this.state.formData)
    const city = await getCity(this.state.formData);
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
