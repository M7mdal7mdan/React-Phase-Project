import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./Components/List";
import Profile from "./Components/Profile";
import MyNavbar from "./Components/MyNavbar";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import "./App.css";
import { Layout } from "./Components/Layout";


function App() {
  return (
    <React.Fragment>
      <MyNavbar />
           <Layout>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jam3yalist" element={<List />} />
                    <Route path="/jam3ya/:slug" element={<Detail />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Layout>
    </React.Fragment>
  );
}

export default App;
