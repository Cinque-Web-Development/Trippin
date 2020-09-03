import React, { Component } from "react";
import "./StartTrip.css";
import Cities from "../../components/Cities";
import SearchBar from "../SearchBar";
import { getCity } from "../../services/googlePlacesService";
import Map from "../../components/Map/Map";

export default class StartTrip extends Component {
  state = {
    formData: {
      term: "",
    },
    lat: 32.779167,
    lng: -96.808891,
  };

  onInputChange = (event) => {
    const formData = { term: event.target.value };
    this.setState({ formData });
  };

  submitCitySearch = async (event) => {
    event.preventDefault();
    const city = await getCity(this.state.formData);
    console.log(city);
  };

  render() {
    return (
      <div>
        <SearchBar
          term={this.state.term}
          onInputChange={this.onInputChange}
          submitCitySearch={this.submitCitySearch}
        />
        <Map lat={this.state.lat} lng={this.state.lng} />
        {/* <Cities cities={cities}/> */}
      </div>
    );
  }
}
