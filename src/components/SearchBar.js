import React from 'react';

const SearchBar = ({term, onInputChange}) => {
  return (
    <div>
      <div className="ui form">
          <div className="field">
            <label>Search City</label>
            <input value={term} onChange={onInputChange} className="input" type="text" />
            <button className="ui green button">Search</button>
          </div>
        </div>
    </div>
  )
}

export default SearchBar