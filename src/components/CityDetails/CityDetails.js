import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import faker from "faker";

import Amenities from "../Amenities/Amenities";
import ReturnHome from '../ReturnHome/ReturnHome';
import {startTrip} from '../../services/trip-api';

import "./CityDetails.css";

const CityDetails = ({ hotels, city, restaurants, user }) => {
  const [hotel, setHotel] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getHotel = hotels.slice(0, 5);
    const getRestaurant = restaurants.slice(0, 5);
    setRestaurant(getRestaurant);
    setHotel(getHotel);
  }, [hotels, restaurants]);

  const handleStartTrip = () => {
    startTrip(city)
  }

  let cityDetailsPage = city ? (
      <div className="CityDetails pusher">
        <h1 className="city-name">{city}</h1>
        <img className="city-detail-img" alt="" src={faker.image.city()}></img>
        <p className="city-description">{faker.lorem.paragraph()}</p>
        {user ? 
          <button onClick={handleStartTrip}>Start My Trip Here!</button>
        :
        <p>NO user</p>
        }
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
