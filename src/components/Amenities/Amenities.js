import React from "react";
import faker from 'faker';
import {Link} from 'react-router-dom';
import './Amenities.css';

export default function Amenities({ amenities }) {
  return (
    amenities.map((amenity) => 
      <Link to={`/citydetails/${amenity.place_id}`} key={amenity.name} className="amenity-card">
        <div  className="ui link cards">
          <div className="card">
            <div className="image">
              <img alt="" src={faker.image.business()} />
            </div>
            <div className="content"></div>
            <div className="header">{amenity.name}</div>
            <div className="description">{amenity.formatted_address}</div>
          </div>
        </div>
      </Link>
    )
  );
}
