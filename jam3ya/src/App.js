import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
import SearchBar from "./Components/SearchBar";



function App() {
  return (
    <div >
      <NavBar  />
       <Routes>
        <Route
          path="/jam3yaList"
          element={<List />}
        />
        <Route
          path="/searchBar"
          element={<SearchBar />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
