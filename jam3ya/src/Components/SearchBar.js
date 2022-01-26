import React from 'react';


const SearchBar = ({setQuery}) => {
  
  return (<div>

    <input onChange={(event) => setQuery(event.target.value )}
    placeholder='search by amount'/> 
    
    
     <input onChange={(event) => setQuery(event.target.value )}
    placeholder='search by date' />
  </div>);
};

export default SearchBar;
