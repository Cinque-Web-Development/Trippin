import React from "react";
import "./UserTripCard.css";
import {Link} from 'react-router-dom'

export default function UserTripCard({ trip }) {
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
          <Link to={`/edittrip/${trip._id}`} className="ui left blue button">Edit</Link>
          <button className="ui right red button">Delete</button>
        </div>
      </div>
    </div>
  );
}
