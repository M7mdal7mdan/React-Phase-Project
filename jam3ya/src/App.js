import { Route,Routes } from 'react-router-dom';
import './App.css';
import List from "./Components/List"
import React from 'react';


function App() {
  return (
    <div >
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
