import React from "react";
import { Link } from 'react-router-dom';
import faker from "faker";
import ReturnHome from '../ReturnHome/ReturnHome';
import "./AmenityList.css";

const AmenityList = ({ amenity, city, type }) => {

  let amenityListPage = city ? (
    
    <>
      <h1 className="amenity-list-city"> {type} in {city}</h1>
      <div className="amenity-list-wrapper">
        {amenity.map((a) => (
          <Link to={`/citydetails/${a.place_id}`} className="amenity-cards-list">
            <div key={a.name}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img alt="" src={faker.image.business()} />
                  </div>
                  <div className="content"></div>
                  <div className="header" id="amenity-list-header">{a.name}</div>
                  <div className="description">{a.formatted_address}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
  :
  (
    <>
    <ReturnHome />
    </>
  )
  
  return (
    <>
    {amenityListPage}
    </>
  );
};

export default AmenityList;
