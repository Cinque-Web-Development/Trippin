import React from "react";
import {Link} from 'react-router-dom'

import "./UserTripCard.css";

export default function UserTripCard({ trip, handleDeleteTrip, handleGetTripDetails }) {

  

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">
            Trip to {trip.destinations.map((dest) => dest.location)}
          </div>
          <div className="description">
            {new Date(trip.start).toLocaleDateString()} - {new Date(trip.end).toLocaleDateString()}
          </div>
          <br/>
          <Link to={`/edittrip/${trip._id}`} onClick={() => handleGetTripDetails(trip)} className="ui left blue button">Edit</Link>
          <button className="ui right red button" onClick={() => handleDeleteTrip(trip._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
