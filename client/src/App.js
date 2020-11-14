import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapContainer from "./containers/map";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";

const App = () => {
  return (
    <>
      <Router >
        <Route component={MapContainer} path="/" exact />
        <Route exat path="/login" component={LoginPage} />
        <Route exat path="/register" component={RegistrationPage} />
      </Router>
    </>
  );
};

export default App;
