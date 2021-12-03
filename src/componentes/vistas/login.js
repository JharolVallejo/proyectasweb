import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <h4 class="mt-1 mb-5 pb-1">Iniciar sesión</h4>
                </div>

                <form onSubmit={handleSubmit} >

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} placeholder='username'/>
                    <label class="form-label" for="form2Example11">Nombre de usuario </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control"   type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Iniciar sesión</button>

                    <div>
                          <NavLink
                            activeClassName="active"
                            className="nav-item nav-link login"
                            exact
                            to="/Register"
                          >Regístrate</NavLink>
                      </div>

                  </div>

                  {/* <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div> */}

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
         
            </div>
          </div>
        </div>
  
  </div>


    
  );
};