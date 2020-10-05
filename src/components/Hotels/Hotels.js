import React from 'react';
import Amenities from '../Amenities/Amenities'
import './Hotels.css'

const Hotels = ({hotel}) => {
  return (
    <div>
    
    <Amenities hotel={hotel}/>
  
    </div>
  )
}

export default Hotels