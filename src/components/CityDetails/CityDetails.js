import React, { useState, useEffect } from "react";
import Amenities from "../Amenities/Amenities";
import ReturnHome from '../ReturnHome/ReturnHome';
import faker from "faker";
import { Link } from "react-router-dom";

import "./CityDetails.css";

const CityDetails = ({ hotels, city, restaurants }) => {
  const [hotel, setHotel] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const getHotel = hotels.slice(0, 5);
    const getRestaurant = restaurants.slice(0, 5);
    setRestaurant(getRestaurant);
    setHotel(getHotel);
  }, [hotels, restaurants]);

  let cityDetailsPage = city ? (
    
      <div className="CityDetails pusher">
        <h1 className="city-name">{city}</h1>
        <img className="city-detail-img" alt="" src={faker.image.city()}></img>
        <p className="city-description">{faker.lorem.paragraph()}</p>
        <div className="amenity-wrapper">
          <Link to='/citydetails/hotels' className="amenity-title"><h2>Hotels</h2></Link>
          {hotel.length ? (
            <Amenities amenities={hotel} />
          ) : (
            <div className="ui active inline loader"></div>
          )}
        </div>
        <div className="amenity-wrapper">
          <Link to='/citydetails/restaurants' className="amenity-title"><h2 id="restaurant-list-header">Restaurants</h2></Link>
          {restaurant.length ? (
            <Amenities amenities={restaurant} />
          ) : (
            <div className="ui active inline loader"></div>
          )}
        </div>
      </div>
  ) : (
    <>
    <ReturnHome />
    </>
  );

  return <>{cityDetailsPage}</>;
};

export default CityDetails;
