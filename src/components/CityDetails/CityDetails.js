import React, {useState, useEffect}from 'react';
import Amenities from '../Amenities/Amenities'
import axios from 'axios'

import './CityDetails.css'

const CityDetails = ({hotels}) => {
  const [hotel, setHotel] = useState([])
  
  useEffect(() => {
    const getHotel = hotels.slice(0, 6)
    setHotel(getHotel)
  }, [hotels])

  return (
    <>
      <div className="hotels">
        <Amenities amenities={hotel}/>
      </div>
    </>
  )
}

export default CityDetails