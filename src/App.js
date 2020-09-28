import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import "./App.css";
import axios from "axios";

const App = () => {
  const [cities, setCities] = useState([]);

  const handleSearchSubmit = async (event, searchCity) => {
    event.preventDefault();
    axios
      .get("/cities", {
        params: {
          searchCity: searchCity,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setCities(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <div className="body">
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
};

export default App;
