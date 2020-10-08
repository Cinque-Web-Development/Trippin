import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getAmenityDetails } from '../../services/google-api';
import './AmenityDetails.css';

export default function AmenityDetails() {
    const [amenityDetails, setAmenityDetails] = useState([]);
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const googleAmenityDetails =  getAmenityDetails(id);
        setAmenityDetails(googleAmenityDetails.data.results);
        console.log(amenityDetails);
    }, [id])

    return (
        <div>
            <h1>Amenity Details</h1>
        </div>
    )
}
