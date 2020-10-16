import React, {useState, useEffect} from "react";
import "./StartTripPage.css";
import { DatePicker } from "react-materialize";
import M from "materialize-css";
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import axios from 'axios'

export default function StartTripPage({ city }) {
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  useEffect(() => {
    axios.get('/citycoord', {
      params: {
        city: city
      }
    })
    .then((response) => {
      setLat(response.data.results[0].geometry.location.lat);
      setLng(response.data.results[0].geometry.location.lng);
    })
  }, [city])
   
  return (
    <>
      <h1>Start your trip to {city}</h1>

      <DatePicker 
      options={{
          maxDate:null,
          minDate:null
      }}
      />
      <DatePicker />
      <GoogleMaps 
        lat={lat}
        lng={lng}
      />
    </>
  );
}
