import React, { Component } from "react";
import "./StartTrip.css";
import Cities from '../../components/Cities'


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
        <div className="ui form">
          <div className="field">
            <label>Search City</label>
            <input value={this.state.term} onChange={this.onInputChange} className="input" type="text" />
            <button className="ui green button">Search</button>
          </div>
        </div>
        <Cities cities={cities}/>
      </div>
    );
  }
}
