import React from 'react';



const SearchBar = ({setQuery}) => {
  
  return (

    <div className='searchBar'>

    <input onChange={(event) => setQuery(event.target.value )}
    placeholder='search by amount'  /> 
    <span></span>
    <span></span>
    <input className='mx-3' onChange={(event) => setQuery(event.target.value )}
    placeholder='search by date' />
    </div>
   
  );
};

export default SearchBar;
