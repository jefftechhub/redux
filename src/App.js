import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import ErrorPage from "./ErrorPage";
import NavBar from "./Navbar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
