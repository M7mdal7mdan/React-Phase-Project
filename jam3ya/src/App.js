import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import List from "./Components/List";
import Detail from "./Components/Detail";
// import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/jam3yalist" element={<List />} />
        <Route path="/jam3ya/:slug" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
