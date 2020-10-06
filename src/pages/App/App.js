import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import SearchLocationInput from "../../components/SearchLocationInput/SearchLocationInput";
import CityDetails from '../../components/CityDetails/CityDetails'
import ErrorPage from '../ErrorPage/ErrorPage'
import { Route, Switch } from 'react-router-dom'
import "./App.css";

const App = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([])
  const [restaurants, setRestaurants] = useState([])

  const handleSearchSubmit = async (query) => {
    axios
      .get("/hotels", {
        params: {
          searchTerm: query,
        },
      })
      .then((response) => {
        setCity(query)
        setHotels(response.data.results);
      })
      .catch((err) => console.log(err));  

    axios.get('/restaurants', {
      params: {
        searchTerm: query,
      },
    })  
    .then((response) => {
      setRestaurants(response.data.results);
    })
    .catch((err) => console.log(err))
  };


  return (
    <Switch>
      <Route exact path="/" render={() => 
        <>
          <NavBar />
          <SearchLocationInput 
            handleSearchSubmit={handleSearchSubmit}
          />
        </>
      }>
      </Route>

      <Route exact path="/citydetails" render={() =>
        <>
          <NavBar />
          <CityDetails hotels={hotels} city={city} restaurants={restaurants}/>
        </>
      }>
      </Route>

      <Route path="*" render={({history}) => 
        <ErrorPage />
      }></Route>
    </Switch>
  );
};

export default App;
