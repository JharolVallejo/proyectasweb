import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
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
                      <img  className="log-jk" src="/img/Logotipo Negro y Amarillo en Negrita.png" alt="" />
                    </NavLink>
                  </div>
                  <div className="row-shear-2">
                    
                   
                      <input className="input-header" type="text" name="buscar"></input>
                      <input className="btn btn3" type="submit" value="Buscar"></input>
                   
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
                          >Iniciar Sesión</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </header>
  );
};