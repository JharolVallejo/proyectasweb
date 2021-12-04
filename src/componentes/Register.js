import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/Usuario/AgregarUsuario", {
        method: "POST",
        body: JSON.stringify(data),
      });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="col-xl-10">
      <div class="card rounded-3 text-black">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="card-body p-md-10 mx-md-4">
              <div class="text-center">
                <h4 class="mt-1 mb-5 pb-1">Registrarse</h4>
              </div>

              <form onSubmit={handleSubmit}>
                <div class="form-outline mb-6">
                  <label class="form-label" for="form2Example11">
                    Nombre{" "}
                  </label>
                  <input
                    type="text"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="nombre"
                  />
                  <label class="form-label" for="form2Example11">
                    Apellido{" "}
                  </label>
                  <input
                    type="text"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="apellido"
                  />
                  <label class="form-label" for="form2Example11">
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="direccion"
                  />
                  <label class="form-label" for="form2Example11">
                    Teléfono{" "}
                  </label>
                  <input
                    type="number"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="telefono"
                  />
                  <label class="form-label" for="form2Example11">
                    Tipo Documento{" "}
                  </label>
                  <select
                    class="selectpicker custom-select"
                    data-style="btn-success"
                    onChange={handleChange}
                    name="iddocumento"
                  >
                    <option>---</option>
                    <option value="1">Cédula de Ciudadanía</option>
                    <option value="2">Cédula de extranjería</option>
                  </select>{" "}
                  <br />
                  <label class="form-label" for="form2Example11">
                    No. Documento{" "}
                  </label>
                  <input
                    type="number"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="documento"
                  />
                  <label class="form-label" for="form2Example11">
                    Ciudad{" "}
                  </label>
                  <select
                    class="selectpicker custom-select"
                    data-style="btn-success"
                    onChange={handleChange}
                    name="idciudad"
                  >
                    <option>---</option>
                    <option value="1">Bogotá</option>
                    <option value="2">Cartagena</option>
                  </select>{" "}
                  <br />
                  <label class="form-label" for="form2Example11">
                    Rol{" "}
                  </label>
                  <select
                    class="selectpicker custom-select"
                    data-style="btn-success"
                    name="idrol"
                    onChange={handleChange}
                  >
                    <option>---</option>
                    <option value="1">Cliente</option>
                    <option value="2">Vendedor</option>
                  </select>{" "}
                  <br />
                  <label class="form-label" for="form2Example11">
                    E-mail{" "}
                  </label>
                  <input
                    type="email"
                    id="form2Example11"
                    class="form-control"
                    onChange={handleChange}
                    name="email"
                  />
                  <label class="form-label" for="form2Example11">
                    Contraseña{" "}
                  </label>
                  <input
                    type="password"
                    id="form2Example22"
                    class="form-control"
                    placeholder="password"
                    onChange={handleChange}
                    name="contraseña"
                  />
                </div>

                <br />
                <br />
                <div class="text-center pt-1 mb-5 pb-1">
                  <button
                    class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                    type="submit"
                  >
                    Registrarse
                  </button>
                </div>

                {/* <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div> */}
              </form>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center gradient-custom-2"></div>
        </div>
      </div>
    </div>
  );
};
