import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import AmenityList from "../../components/AmenityList/AmenityList";
import AmenityDetails from '../../components/AmenityDetails/AmenityDetails';
import CityDetails from "../../components/CityDetails/CityDetails";
import Layout from "../../components/Layout/Layout";
import SearchLocationInput from "../../components/SearchLocationInput/SearchLocationInput";

import ErrorPage from "../ErrorPage/ErrorPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

import userService from "../../services/userService";
import { getHotels, getRestaurants } from "../../services/google-api";

import "./App.css";

const App = ({
  history
}) => {
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const handleSearchSubmit = async (query) => {
    setCity(query);
    const googleHotels = await getHotels(query);
    googleHotels.data.results.sort((a, b) => b.rating - a.rating);
    setHotels(googleHotels.data.results);
    const googleRestaurants = await getRestaurants(query);
    googleRestaurants.data.results.sort((a, b) => b.rating - a.rating);
    setRestaurants(googleRestaurants.data.results);
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };



  return ( 
  <>
    <Switch>
      <Route exact path = "/" render = {() => 
        <Layout 
          handleLogout={handleLogout}
          user={user}
        >
          <SearchLocationInput 
            handleSearchSubmit = {handleSearchSubmit}
          />
        </Layout>
      }></Route>

      <Route exact path="/citydetails" render={() => 
        <Layout 
          handleLogout={handleLogout}
        >
          <CityDetails 
            hotels={hotels}
            city={city}
            restaurants={restaurants}
            user={user}
            history={history}
          />
        </Layout>
      }></Route>

      <Route exact path="/citydetails/hotels" render={() => 
        <Layout 
          handleLogout={handleLogout}
          user={user}
        >
          <AmenityList 
            amenity={hotels} 
            city={city} 
            type="Hotels"
          />
        </Layout>
      }></Route>

      <Route exact path="/citydetails/restaurants" render={() => (
        <Layout 
          handleLogout={handleLogout}
          user={user}
        >
          <AmenityList 
            amenity={restaurants} 
            city={city} 
            type="Restaurants"
          />
        </Layout>
      )}></Route>

      <Route exact path="/citydetails/:id" render={() => (
        <Layout 
          handleLogout={handleLogout}
          user={user}  
        >
          <AmenityDetails 
            city={city} 
            type="Restaurants"
          />
        </Layout>
      )}></Route>

      <Route exact path = "/login" render = {() => (
        <Layout 
          handleLogout={handleLogout}
          user={user}
        >
          <LoginPage 
            history = {history}
            handleSignupOrLogin = {handleSignupOrLogin}
          />
        </Layout>
      )}></Route>

      <Route exact path = "/signup" render = {() => ( 
        <Layout 
          handleLogout={handleLogout}
        >
          <SignupPage 
            history = {history}
            handleSignupOrLogin = {handleSignupOrLogin}
          />
        </Layout>
      )}></Route>

      <Route path = "*"render = {() => 
        <ErrorPage />
      }></Route>
    </Switch> 
  </>
  );
};

export default App;