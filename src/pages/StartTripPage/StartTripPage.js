import React from "react";
import "./StartTripPage.css";
import { DatePicker } from "react-materialize";
import M from "materialize-css";
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'

export default function StartTripPage({ city }) {
  console.log(city)
   
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
