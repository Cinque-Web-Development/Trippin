import React from "react";

const Cities = ({ cities }) => {
  const renderedCites = cities.map((city) => {
    return <div>{city.title}</div>;
  });

  return <div>{renderedCites}</div>;
};

export default Cities;
