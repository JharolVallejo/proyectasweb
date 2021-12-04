import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import { Products } from "../componentes/Home";
import { Register } from "../componentes/Register";
import { ProductScreen } from "../componentes/screens/ProductScreen";
import { Login } from "../componentes/vistas/login";

export const Routers = () => {

  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route
          exact
          path="/producto/:productonombre"
          component={ProductScreen}
        />
        <Redirect to="/" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
};
