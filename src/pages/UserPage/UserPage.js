import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserTripCard from "../../components/UserTripCard/UserTripCard";

import { getUserTrips, deleteTrip } from "../../services/trip-api";
import userService from "../../services/userService";

import "./UserPage.css";

export default function UserPage() {
  const [user, setUser] = useState();
  const [trips, setTrips] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUserTrips() {
      const userTrips = await getUserTrips(id);
      setTrips(userTrips);
    }
    fetchUserTrips();
  },[user])

  useEffect(() => {
    async function fetchUserData() {
      const userInfo = await userService.getUserById(id);
      setUser(userInfo);
    }
    fetchUserData();
  }, [id]);

  const handleDeleteTrip = (id) => {
    deleteTrip(id)
    setTrips(trips.filter(trip => trip._id !== id))
  }

  return user ? (
    <div>
      <h1 className="user-name">{user.name}</h1>
      {trips.map((trip) => (
        <UserTripCard 
          key={trip._id}
          trip={trip} 
          handleDeleteTrip={handleDeleteTrip}
          />
      ))}
    </div>
  ) : (
    ""
  );
}
