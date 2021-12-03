import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [documenttype, setDocumentType] = useState("");
  const [city, setCity] = useState("");
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");



  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-5">
            <div class="col-lg-6">
              <div class="card-body p-md-10 mx-md-4">

                <div class="text-center">
                  <h4 class="mt-1 mb-5 pb-1">Registrarse</h4>
                </div>

                <form onSubmit={handleSubmit} >

                  <div class="form-outline mb-6">
                  <label class="form-label" for="form2Example11">Nombre </label>
                    <input type="text" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
                    <label class="form-label" for="form2Example11">Apellido </label>
                    <input type="text" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
                    <label class="form-label" for="form2Example11">Dirección</label>
                    <input type="text" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
                    <label class="form-label" for="form2Example11">Teléfono </label>
                    <input type="number" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
            <label class="form-label" for="form2Example11">Tipo Documento </label>
          <select class="selectpicker custom-select" 
        data-style="btn-success">
            <option>---</option>
        <option>Cédula de Ciudadanía</option>
        <option>Cédula de extranjería</option>
    </select>  <br/>
    <label class="form-label" for="form2Example11">No. Documento </label>
                    <input type="number" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
            <label class="form-label" for="form2Example11">Ciudad </label>
            <select class="selectpicker custom-select" 
        data-style="btn-success">
             <option>---</option>
        <option>Bogotá</option>
        <option>Cartagena</option>
    </select>  <br/>
                      <label class="form-label" for="form2Example11">Rol </label>
                      <select class="selectpicker custom-select" 
        data-style="btn-success">
            <option>---</option>
        <option>Cliente</option>
        <option>Vendedor</option>
    </select>  <br/>
                      
                      <label class="form-label" for="form2Example11">E-mail </label>
                    <input type="email" id="form2Example11" class="form-control"  onChange={(e) => setUsername(e.target.value)}
          value={username} />
                                <label class="form-label" for="form2Example11">Contraseña </label>

              <input type="password" id="form2Example22" class="form-control"   type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
                    <label class="form-label" for="form2Example11">Confirmar Contraseña </label>

<input type="password" id="form2Example22" class="form-control"   type='password'
placeholder='password'
onChange={(e) => setPassword(e.target.value)}
value={password} />
            
                    
                  </div>
                  
           
                    <br/><br/>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Registrarse</button>
            
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