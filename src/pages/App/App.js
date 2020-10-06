import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import NavBar from "../../components/NavBar/NavBar";
import SearchLocationInput from "../../components/SearchLocationInput/SearchLocationInput";
import CityDetails from '../../components/CityDetails/CityDetails';

import ErrorPage from '../ErrorPage/ErrorPage';

import { getHotels, getRestaurants } from '../../services/google-api'

import "./App.css";

const App = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([])
  const [restaurants, setRestaurants] = useState([])

  const handleSearchSubmit = async (query) => {
    setCity(query)

    const hotels = await getHotels(query)
    setHotels(hotels.data.results)
    const restaurants = await getRestaurants(query)
    setRestaurants(restaurants.data.results)
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
