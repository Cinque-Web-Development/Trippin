import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchLocationInput from "./components/SearchLocationInput";
import CityDetails from './components/CityDetails/CityDetails'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([])

  const handleSearchSubmit = async (event, query) => {
    event.preventDefault();
    axios
          .get("/hotels", {
            params: {
              searchTerm: query,
            },
          })
          .then((response) => {
            setHotels(response.data.results);
            console.log(response.data.results);
          })
          .catch((err) => console.log(err));
  };


  return (
    <>
    <Router>
      <NavBar />
      <Route exact path="/">
      <SearchLocationInput 
        handleSearchSubmit={handleSearchSubmit}
      />
      </Route>
      <Route exact path="/citydetails" render={() =>
        <CityDetails hotels={hotels}/>
      }>
      </Route>
    </Router>
    </>
  );
};

export default App;
