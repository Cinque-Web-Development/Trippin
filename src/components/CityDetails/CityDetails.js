import React, {useState, useEffect}from 'react';
import Amenities from '../Amenities/Amenities';

import './CityDetails.css'

const CityDetails = ({hotels, city}) => {
  const [hotel, setHotel] = useState([])
  
  useEffect(() => {
    const getHotel = hotels.slice(0, 6)
    setHotel(getHotel)
  }, [hotels])

  return (
    <>
      <h1>{city}</h1>
      <div className="hotels">
        <Amenities amenities={hotel}/>
      </div>
    </>
  )
}

export default CityDetails