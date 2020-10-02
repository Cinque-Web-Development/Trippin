import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchLocationInput from "./components/SearchLocationInput";
import "./App.css";

const App = () => {
  const [hotels, setHotels] = useState([]);

  const handleSearchSubmit = async (event, city) => {
    event.preventDefault();
    axios
      .get("/hotels", {
        params: {
          searchTerm: city,
        },
      })
      .then((response) => {
        setHotels(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <SearchLocationInput 
        handleSearchSubmit={handleSearchSubmit}
      />
    </>
  );
};

export default App;
