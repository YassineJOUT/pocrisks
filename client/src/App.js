import React, { useEffect, useState } from "react";
import Map from "./components/map";
import { getGeoData } from "./service/geodata";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapContainer from "./containers/map";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <>
      <Router >
        <Route component={MapContainer} path="/map" exact />
        <Route exat path="/login" component={LoginPage} />
      </Router>
    </>
  );
};

export default App;
