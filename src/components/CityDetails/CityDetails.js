import React, {useState, useEffect}from 'react';
import Hotels from '../Hotels/Hotels'
import axios from 'axios'

const CityDetails = ({hotels}) => {


  return (
    <>
    {hotels.map((hotel) => 
    <Hotels hotel={hotel}/>
    )}
    </>
  )
}

export default CityDetails