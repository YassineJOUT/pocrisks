import React, { useState } from "react";
import "./style.css";
import { Router, Route } from "react-router-dom";
import MapContainer from "./containers/map";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import { history } from "./util/history";
import { Context, loadState } from "./util/useAuth";

const loadedState = loadState();

const App = () => {
  const [context, setContext] = useState(loadedState);
  console.log("context ", context);
  return (
    <>
      <Context.Provider value={{ ...context, setContext }}>
        <Router history={history}>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/" component={MapContainer} />
        </Router>
      </Context.Provider>
    </>
  );
};

export default App;
