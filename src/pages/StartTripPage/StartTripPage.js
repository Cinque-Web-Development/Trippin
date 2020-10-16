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
    axios.get('/citycooord', {
      params: {
        city: city
      }
    })
    .then((response) => {
      console.log(response.data.result)
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
      <GoogleMaps />
    </>
  );
}
