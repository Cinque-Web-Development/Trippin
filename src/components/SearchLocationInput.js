import React, { useState, useEffect, useRef } from "react";
import {useHistory} from 'react-router-dom'
import './SearchLocationInput.css';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"] }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query); // I think this is actually setQuery that's being passed through a series of cb functions
}

function SearchLocationInput({handleSearchSubmit}) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
  
  const handleSubmit = (event, query) => {
    event.preventDefault();
    handleSearchSubmit(query);
    history.push('/citydetails');
  }

  return (
    <div className="search-wrapper">
      <div>
        <form
          className="ui input focus"
        >
          <input
            ref={autoCompleteRef}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter a City"
            value={query}
            id="city-search"
          />
          <button className="ui blue button" onClick={(event) => handleSubmit(event, query)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SearchLocationInput;