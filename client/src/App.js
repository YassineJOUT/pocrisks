import React from "react";
import "./style.css";
import { Router, Route } from "react-router-dom";
import MapContainer from "./containers/map";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import { history } from "./util/history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/" component={MapContainer} />
      </Router>
    </>
  );
};

export default App;
