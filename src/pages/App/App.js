import React, {
  useState
} from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import SearchLocationInput from "../../components/SearchLocationInput/SearchLocationInput";
import CityDetails from "../../components/CityDetails/CityDetails";
import AmenityList from "../../components/AmenityList/AmenityList";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ErrorPage from "../ErrorPage/ErrorPage";

import userService from "../../services/userService";
import {
  getHotels,
  getRestaurants
} from "../../services/google-api";

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
    <NavBar user = {
      user
    }
    handleLogout = {
      handleLogout
    }
    />

    <Switch >
    <Route exact path = "/"
    render = {
      () => ( <>
        <SearchLocationInput handleSearchSubmit = {
          handleSearchSubmit
        }
        /> </>
      )
    } >
    </Route>

        <Route
          exact
          path="/citydetails"
          render={() => (
            <>
              <CityDetails
                hotels={hotels}
                city={city}
                restaurants={restaurants}
              />
            </>
          )}
        ></Route>
        <Route
          exact
          path="/citydetails/hotels"
          render={() => (
            <>
              <AmenityList amenity={hotels} city={city} type="Hotels"/>
            </>
          )}
        ></Route>
        <Route
          exact
          path="/citydetails/restaurants"
          render={() => (
            <>
              <AmenityList amenity={restaurants} city={city} type="Restaurants"/>
            </>
          )}
        ></Route>

    <Route exact path = "/login"
    render = {
      () => ( <>
        <LoginPage history = {
          history
        }
        handleSignupOrLogin = {
          handleSignupOrLogin
        }
        /> </>
      )
    } >
    </Route>

    <Route exact path = "/signup"
    render = {
      () => ( <>
        <SignupPage history = {
          history
        }
        handleSignupOrLogin = {
          handleSignupOrLogin
        }
        /> </>
      )
    } >
    </Route>

    <Route path = "*"
    render = {
      () => < ErrorPage />
    } > </Route> </Switch> 
    </>
  );
};

export default App;