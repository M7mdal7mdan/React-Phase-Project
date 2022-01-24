import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
// import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/jam3yaList" element={<List />} />
        <Route path="/jam3ya/:jam3yaSlug" />
      </Routes>
    </div>
  );
}

export default App;
