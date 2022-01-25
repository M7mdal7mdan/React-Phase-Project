import React from 'react';
import {useState} from "react";
import jam3yaStore from '../stores/jam3yaStore';
import Listitem from './Listitem';
const SearchBar = () => {
    const [query, setQuery] = useState("");
    const listItems = jam3yaStore.filter((Listitem) => Listitem.startDate.includes(query))
    .map((Listitem) =>
    <div key={Listitem.id}>
        <div>
            {Listitem.startDate}
            {Listitem.amout}
        
         </div>
    </div>
    
    
    )


  return <div>
<p>



</p>


<SearchBar setQuery={setQuery}/>


  </div>;
};

export default SearchBar;
