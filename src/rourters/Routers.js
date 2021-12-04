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

export const UserContext = React.createContext();

export const Routers = () => {
  const [productos, setProductos] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const buscarProducto = async (producto) => {
    setBusquedaRealizada(true)
    try {
      const res = await fetch(
        `http://localhost:3000/Producto/filter/${producto}`
      );
      const data = await res.json();
      setProductos(data.listaproducto)
    } catch (error) {}
    // setProductos(e)
  };
  return (
    <UserContext.Provider value={{ productos, busquedaRealizada }}>
      <Router>
        <Header buscarProducto={buscarProducto} />
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
    </UserContext.Provider>
  );
};
