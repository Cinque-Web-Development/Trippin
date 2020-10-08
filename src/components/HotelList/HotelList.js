import React from "react";
import faker from "faker";
import "./HotelList.css";

const HotelList = ({ hotels, city }) => {
  return (
    <>
      <h1 className="hotel-city"> Hotels in {city}</h1>
      {hotels.map((hotel) => (
        <div className="hotels-cards">
          <div key={hotel.name}>
            <div className="ui link cards">
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
        </div>
      ))}
    </>
  );
};

export default HotelList;
