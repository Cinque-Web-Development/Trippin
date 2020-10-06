import React, {useState, useEffect}from 'react';
import Amenities from '../Amenities/Amenities';

import './CityDetails.css'

const CityDetails = ({hotels, city, restaurants}) => {
  const [hotel, setHotel] = useState([])
  const [restaurant, setRestaurant] = useState([])
  
  useEffect(() => {
    const getHotel = hotels.slice(0, 5)
    const getRestaurant = restaurants.slice(0, 5);
    setRestaurant(getRestaurant)
    setHotel(getHotel)
  }, [hotels, restaurants])

  return (
    <>
      <h1 className="city-name">{city}</h1>
      <div className="amenity-wrapper">
        <h2 className="amenity-title">Hotels</h2>
        <Amenities amenities={hotel}/>
      </div>
      <div className="amenity-wrapper">
        <h2 className="amenity-title">Restaurants</h2>
        <Amenities amenities={restaurant}/>
      </div>
    </>
  )
}

export default CityDetails