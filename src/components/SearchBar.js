import React from 'react';

const SearchBar = ({term, onInputChange, submitCitySearch}) => {
  return (
    <div>
      <div className="ui form">
          <form className="field" onSubmit={submitCitySearch}>
            <label>Search City</label>
            <input value={term} onChange={onInputChange} className="input" type="text" />
            <button className="ui green button" type="submit">Search</button>
          </form>
        </div>
    </div>
  )
}

export default SearchBar