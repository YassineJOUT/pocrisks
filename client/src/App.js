import React, { useState } from "react";
import "./style.css";
import { Router, Route, Redirect } from "react-router-dom";
import MapContainer from "./containers/map";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import { history } from "./util/history";
import { Context, loadState } from "./util/useAuth";

const loadedState = loadState();

const App = () => {
  const [context, setContext] = useState(loadedState);
  return (
    <>
      <Context.Provider value={{ ...context, setContext }}>
        <Router history={history}>
          <Route
            path="/"
            exact
            component={() => (
              <Redirect
                to={context.contextState.isLogged ? "/" : "login"}
              />
            )}
          />
          
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/" component={MapContainer} />
        </Router>
      </Context.Provider>
    </>
  );
};

export default App;
