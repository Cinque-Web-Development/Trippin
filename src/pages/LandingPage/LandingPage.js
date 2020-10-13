import React from 'react';
import SearchLocationInput from '../../components/SearchLocationInput/SearchLocationInput';
import './LandingPage.css';

export default function LandingPage({handleSearchSubmit}) {
    return (
        <div className="LandingPage">
            <p className="landing-text">Explore hotels and restaurants to start planning your next vacation.<br></br>
            Start by searching for a destination below.</p>
            <SearchLocationInput handleSearchSubmit={handleSearchSubmit}/>
        </div>
    )
}
