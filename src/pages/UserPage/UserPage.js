import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserTrips, deleteTrip } from "../../services/trip-api";
import userService from "../../services/userService";

import UserTripCard from "../../components/UserTripCard/UserTripCard";
import "./UserPage.css";

export default function UserPage() {
  const [user, setUser] = useState();
  const [trips, setTrips] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      const userInfo = await userService.getUserById(id);
      setUser(userInfo);
      const userTrip = await getUserTrips(id);
      setTrips(userTrip);
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
        <UserTripCard trip={trip} handleDeleteTrip={handleDeleteTrip}/>
      ))}
    </div>
  ) : (
    ""
  );
}
