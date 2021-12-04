import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/Logotipo Negro y Amarillo en Negrita.png";

export const Header = () => {
  const [productoBuscado, setProductoBuscado] = useState([]);

  const buscarProducto = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/Producto/filter/${productoBuscado}`
      );
      const data = await res.json();
      localStorage.setItem(
        "productoBusqueda",
        JSON.stringify(data.listaproducto)
      );
    } catch (error) {}
  };
  return (
    <header>
      <div className="container-fluid-md">
        <div className="container-fluid header-1 ">
          <div className="row-header">
            <div className="log-header">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link login"
                exact
                to="/Home"
              >
                <img className="log-jk" src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="row-shear-2">
              <input
                className="input-header"
                type="text"
                name="buscar"
                onChange={(e) => setProductoBuscado(e.target.value)}
              ></input>
              <input
                className="btn btn3"
                type="submit"
                value="Buscar"
                onClick={buscarProducto}
              ></input>
            </div>
            <div className="log-header1" align="center">
              <div>
                {/* <div>
                        <img className="log-carro" src="/img/carro_compras.png" alt="" />
                      </div> */}
                <div>
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link login"
                    exact
                    to="/Login"
                  >
                    Iniciar Sesión
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
