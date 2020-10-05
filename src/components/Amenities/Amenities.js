import React from "react";
import faker from 'faker'
import './Amenities.css'

export default function Amenities({ hotel }) {
  return (
    <div>
      <div  className=" ui link cards">
        <div className="card">
          <div className="image">
            <img alt="" src={faker.image.business()} />
          </div>
          <div className="content"></div>
          <div className="header">{hotel.name}</div>

          <div className="description">{hotel.formatted_address}</div>
        </div>
      </div>
    </div>
  );
}
