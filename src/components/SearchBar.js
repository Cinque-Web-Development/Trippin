import React, {useState} from "react";
import "./SearchBar.css";

const SearchBar = ({handleSearchSubmit}) => {
  const [searchCity, setSearchCity] = useState('')

  const onInputChange = (event) => {
    setSearchCity(event.target.value)
  }
  
  return (
    <>
      <div className="search-bar ui form">
        <form className="search-form field" onSubmit={(event) => handleSearchSubmit(event, searchCity)}>
            <label className="city-search">City Search</label>
            <input id="input-bar" value={searchCity} onChange={onInputChange} type="text"></input>
            <button className="ui green button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
