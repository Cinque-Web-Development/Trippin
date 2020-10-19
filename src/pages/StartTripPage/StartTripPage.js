import React, {useState, useEffect} from "react";
import "./StartTripPage.css";
import { DatePicker } from "react-materialize";
import M from "materialize-css";
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import axios from 'axios'

import {getCityCoords} from '../../services/google-api'

export default function StartTripPage({ city }) {
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  useEffect(() => {
    getCityCoords(city)
    .then((response) => {
      setLat(response.data.results[0].geometry.location.lat);
      setLng(response.data.results[0].geometry.location.lng);
    })
  }, [city])
   
  return (
    <div >
      <h1>Start your trip to {city}</h1>
      <div className="trip-page">
        <div className="trip-dates">
          <h3>Start Trip:</h3><DatePicker 
          options={{
              maxDate:null,
              minDate:null
          }}
          />
          <h3>End Trip:</h3><DatePicker />
        </div>
        <div className="city-map">
          <GoogleMaps 
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
    </div>
  );
}
