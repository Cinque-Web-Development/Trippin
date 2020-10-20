import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import "./StartTripPage.css";
import { DatePicker } from "react-materialize";
import M from "materialize-css";
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import {startTrip} from '../../services/trip-api'

import {getCityCoords} from '../../services/google-api'

const todaysDate = new Date()

export default function StartTripPage({ user, city }) {
  const history = useHistory()
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [formData, setFormData] = useState({
    start:todaysDate,
    end:todaysDate,
    destination:city
  })

  useEffect(() => {
    getCityCoords(city)
    .then((response) => {
      setLat(response.data.results[0].geometry.location.lat);
      setLng(response.data.results[0].geometry.location.lng);
    })
  }, [city])

  const handleStartDateChange = (e) => {
    setFormData({...formData, start: e})
  }
  const handleEndDateChange = (e) => {
    setFormData({...formData, end: e})
  }
   
  const handleStartTrip = () => {
    startTrip(formData)
    history.push(`/user/${user._id}`)
  }

  return (
    <div>
      <h1>Start your trip to {city}</h1>
      <div className="trip-page">
        <div className="trip-dates">
          <h3>Start Trip:</h3><DatePicker 
          value={formData.start.toLocaleDateString()}
          onChange={handleStartDateChange}
          options={{
            maxDate:formData.end,
            minDate:todaysDate
          }}
          />
          <h3>End Trip:</h3><DatePicker 
          value={formData.end.toLocaleDateString()}
          onChange={handleEndDateChange}
          options={{
            minDate:todaysDate
          }}
          />
        </div>
        <div className="city-map">
          <GoogleMaps 
            lat={lat}
            lng={lng}
          />
        </div>
        <button onClick={handleStartTrip}>Start Trip!</button>
      </div>
    </div>
  );
}
