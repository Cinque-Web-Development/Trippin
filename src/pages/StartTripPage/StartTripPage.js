import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import { DatePicker } from "react-materialize";
import M from "materialize-css";

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import ReturnHome from '../../components/ReturnHome/ReturnHome';

import {getCityCoords} from '../../services/google-api'
import {startTrip} from '../../services/trip-api';

import "./StartTripPage.css";

export default function StartTripPage({ user, city }) {
  const todaysDate = new Date()
  const history = useHistory()
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [formData, setFormData] = useState({
    start:todaysDate,
    end:todaysDate,
    user:user._id,
    destinations:[{
      location: city,
    }]
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

  let tripPage = city ? (
    <div>
      <h1>Start your trip to {city}</h1>
      <div className="trip-page">
        <div className="trip-dates">
          <h3>Start Trip:</h3>
          <DatePicker 
            id='start-date'
            value={formData.start.toLocaleDateString()}
            onChange={handleStartDateChange}
            options={{
              maxDate:formData.end,
              minDate:todaysDate
            }}
          />
          <h3>End Trip:</h3>
          <DatePicker 
            id='end-date'
            value={formData.end.toLocaleDateString()}
            onChange={handleEndDateChange}
            options={{
              minDate:todaysDate
            }}
          />
          <button onClick={handleStartTrip}>Start Trip!</button>
        </div>
        <div className="city-map">
          <GoogleMaps 
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
    </div>
  ) : (
    <>
      <ReturnHome />
    </>
  )
  return (
    <>
    {tripPage}
    </>
  );
}
