import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import List from "./Components/List";



function App() {
  return (
    <div >
      <NavBar />
       <Routes>
        <Route
          path="/jam3yaList"
          element={<List />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
