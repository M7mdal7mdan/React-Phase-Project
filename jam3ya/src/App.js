import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import Home from "./Components/Home";
import List from "./Components/List";

function App() {
  return (
    <div>
      <MyNavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/List" element={<List />} />
        <Route path="/jam3ya/:jam3yaSlug" />
      </Routes>
    </div>
  );
}

export default App;
