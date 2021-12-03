import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import { People } from "../componentes/Home";
import { Register } from "../componentes/Register";
import { ProductScreen } from "../componentes/screens/ProductScreen";
import { Login } from "../componentes/vistas/login";

export const Routers = () => {
  return (
      <Router>
        <Header/>
          <Switch>
              <Route exact path="/" component={People} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route
                exact
                path="/People/:name/:birth_year/:height/:mass/:hair_color/:skin_color/:eye_color/:gender"
                component={ProductScreen}
              />
              <Redirect to="/" component={People} />
          </Switch>
        <Footer/>
      </Router>
  );
};