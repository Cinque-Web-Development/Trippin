import React, { useState, useEffect } from "react";
import Amenities from "../Amenities/Amenities";
import HotelList from "../HotelList/HotelList";
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
    <div className="CityDetails">
      <h1 className="city-name">{city}</h1>
      <img className="city-detail-img" alt="" src={faker.image.city()}></img>
      <p className="city-description">{faker.lorem.paragraph()}</p>

      <div id="sidebar" className="ui visible sidebar" >
        <Link to="/citydetails/hotels">Hotels</Link>
      </div>

      <div className="amenity-wrapper">
        <h2 className="amenity-title">Hotels</h2>
        {hotel.length ? (
          <Amenities amenities={hotel} />
        ) : (
          <div class="ui active inline loader"></div>
        )}
      </div>
      <div className="amenity-wrapper">
        <h2 className="amenity-title" id="restaurant-list-header">
          Restaurants
        </h2>
        {restaurant.length ? (
          <Amenities amenities={restaurant} />
        ) : (
          <div class="ui active inline loader"></div>
        )}
      </div>
    </div>
  ) : (
    <div className="return-home">
      <Link to="/">
        <h2>Search for a city to view details</h2>
      </Link>
    </div>
  );

  return <>{cityDetailsPage}</>;
};

export default CityDetails;
