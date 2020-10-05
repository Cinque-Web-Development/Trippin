import React, {useState, useEffect}from 'react';
import Hotels from '../Hotels/Hotels'
import axios from 'axios'

const CityDetails = ({hotels}) => {
  const [hotel, setHotel] = useState([])
  
  useEffect(() => {
    const getHotel = hotels.slice(0, 6)
    setHotel(getHotel)
  }, [hotels])

  return (
    <>
    <div className="hotels">
    {hotel.map((h) =>
    <Hotels hotel={h}/>
    )}
    </div>
    </>
  )
}

export default CityDetails