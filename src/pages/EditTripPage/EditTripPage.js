import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { DatePicker } from "react-materialize";
import M from "materialize-css";

import ReturnHome from '../../components/ReturnHome/ReturnHome';

import { getTripDetails, updateTrip } from '../../services/trip-api';

export default function EditTripPage({ user }) {
    const todaysDate = new Date()
    const history = useHistory()
    const {id} = useParams()
    const [formData, setFormData] = useState()
    
    useEffect(() => {
        async function getTrip(id) {
            const trip = await getTripDetails(id)
            setFormData({
                start: new Date(trip.start),
                end: new Date(trip.end),
                user:user._id,
                destinations:[{
                    location: trip.destinations[0].location,
                }]
            })
        }
        getTrip(id)
    },[id])

    const handleStartDateChange = (e) => {
        setFormData({...formData, start: e})
    }

    const handleEndDateChange = (e) => {
        setFormData({...formData, end: e})
    }

    const handleUpdateTrip = () => {
        updateTrip(id, formData)
        history.push(`/user/${user._id}`)
    }

    let editPage = formData ? (
        <div>
            <h1>Edit {user.name}'s Trip to {formData.destinations[0].location}</h1>
            <div className="trip-dates">
                <h3>Start Trip:</h3>
                <DatePicker 
                    id='start-date'
                    value={formData.start.toLocaleDateString()}
                    onChange={handleStartDateChange}
                    options={{
                        maxDate:formData.end,
                        minDate:todaysDate
                    }}
                />
                <h3>End Trip:</h3>
                <DatePicker 
                    id='end-date'
                    value={formData.end.toLocaleDateString()}
                    onChange={handleEndDateChange}
                    options={{
                        minDate:todaysDate
                    }}
                />
                <button onClick={handleUpdateTrip}>Update Trip</button>
            </div>
        </div>
    ) : (
        <>
            <ReturnHome />
        </>
    )

return (
    <>
        {editPage}
    </>
    )
}
