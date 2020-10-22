import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { DatePicker } from "react-materialize";
import M from "materialize-css";
import ReturnHome from '../../components/ReturnHome/ReturnHome';

const todaysDate = new Date()

export default function UpdateTripPage({ user, tripDetails }) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        start: new Date(tripDetails.start),
        end: new Date(tripDetails.end)
      })

    const handleStartDateChange = (e) => {
    setFormData({...formData, start: e})
    }

    const handleEndDateChange = (e) => {
    setFormData({...formData, end: e})
    }

    let editPage = user ? (
        <div>
            <h1>Edit {user.name}'s Trip to {tripDetails.destinations[0].location}</h1>
            <div className="trip-dates">
                <h3>Start Trip:</h3><DatePicker 
                value={formData.start.toLocaleDateString()}
                onChange={handleStartDateChange}
                options={{
                    maxDate:formData.end,
                    minDate:todaysDate
                }}
                />
                <h3>End Trip:</h3><DatePicker 
                value={formData.end.toLocaleDateString()}
                onChange={handleEndDateChange}
                options={{
                    minDate:todaysDate
                }}
                />
                <button>Update Trip</button>
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
