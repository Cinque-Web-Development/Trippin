import React from 'react';
import {Link} from 'react-router-dom';
import './ReturnHome.css';

export default function ReturnHome() {
    return (
        <div className="return-home">
            <Link to="/">
                <h2>Search for a city to view details</h2>
            </Link>
        </div>
    )
}
