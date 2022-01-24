import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/jam3ya/:slug" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
