import React from "react";
import faker from "faker";
import "./AmenityList.css";

const AmenityList = ({ amenity, city, type }) => {
  return (
    <>
      <h1 className="amenity-list-city"> {type} in {city}</h1>
      <div className="amenity-list-wrapper">
        {amenity.map((a) => (
          <div className="amenity-cards-list">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default AmenityList;