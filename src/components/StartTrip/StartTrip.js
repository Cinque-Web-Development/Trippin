import React, { Component } from "react";
import "./StartTrip.css";
import Cities from '../../components/Cities'
import SearchBar from '../SearchBar'


const cities = [
  {
    title: 'Austin',
  },
  {
    title: 'Dallas'
  },
  {
    title: 'Houston'
  },
  {
    title: 'Lafayette'
  }
]

export default class StartTrip extends Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  

  render() {
    return (
      <div>
        <SearchBar term={this.state.term} onInputChange={this.onInputChange}/>
        <Cities cities={cities}/>
      </div>
    );
  }
}
