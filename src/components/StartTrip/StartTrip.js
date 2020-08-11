import React, { Component } from 'react'
import './StartTrip.css'

export default class StartTrip extends Component {
  render() {
    return (
      <div className="ui segment">
      <div className="ui form">
        <div className="field">
        <label>Search City</label>
        <input type="text"/>
        <button className="ui green button">Search</button>
        </div>
      </div>
      </div>
    )
  }
}

