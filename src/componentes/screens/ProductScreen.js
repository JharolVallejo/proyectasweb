import React, { Fragment } from "react";
import './ProductScreen.css';
import { useParams, useHistory } from "react-router-dom";
import { Routers } from "../../rourters/Routers";
import { CardComments } from "../UI/CardComments";
import { Comments } from "../vistas/comments";
export const ProductScreen = () => {
  // let params = useParams();
  // console.log(match.params.name);
  const {
    name,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = useParams();
  let history = useHistory();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack("/");
    }
  };
  return (
    <Fragment>
      <div className="App">

        <section className={"section-content padding-y bg"}>
          <div className="container">

            <article className="card">
              <div className={"card-body"}>
                <div className={"row"}>
                  <aside className={"col-md-6"}>
                    <article className={"gallery-wrap"}>
                      <div className={"card img-big-wrap"}>
                        <a href="#"> <img src={"assets/descarga.jfif"} /></a>
                      </div>
                      <div className={"thumbs-wrap"}>
                        <a href="#" className={"item-thumb"}> <img src={"images/caja.png"} /></a>
                        <a href="#" className={"item-thumb"}> <img src={"assets/3.jpg"} /></a>
                        <a href="#" className={"item-thumb"}> <img src={"assets/3.jpg"} /></a>
                        <a href="#" className={"item-thumb"}> <img src={"assets/3.jpg"} /></a>
                      </div>
                    </article>
                  </aside>
                  <main className={"col-md-6"}>
                    <article>
                      <a href="#" className={"text-primary btn-link"}>Categoría</a>
                      <h3 className="title"> Product title </h3>
                      <div>
                        <ul className={"rating-stars"}>
                          <li className={"stars-active"}>
                            <i className={"fa fa-star"}></i> <i className={"fa fa-star"}></i>
                            <i className={"fa fa-star"}></i>

                          </li>
                          <li>
                            <i className={"fa fa-star"}></i> <i className={"fa fa-star"}></i>
                            <i className={"fa fa-star"}></i> <i className={"fa fa-star"}></i>
                            <i className={"fa fa-star"}></i>
                          </li>
                        </ul>
                        <span className={"label-rating mr-3 text-muted"}>10/10</span>

                      </div>

                      <hr />

                      <div className={"mb-3"}>
                        <h6>Resumen</h6>
                        <ul className={"list-dots mb-0"}>
                          <li>Valor 1</li>
                          <li>Valor 2 </li>
                          <li>Valor 3</li>
                          <li>Valor 4</li>
                        </ul>
                      </div>



                      <div className="mb-3">
                        <var className="price h4">$ </var> <br />

                      </div>

                      <div className="mb-4">
                        <a href="#" className="btn btn-info mr-1">Comprar</a>
                        <a href="#" className="btn btn-light">Agregar al carrito</a>
                      </div>

                    </article>
                  </main>
                </div>
              </div>
            </article>
            <article className="card mt-5">
              <div className="card-body">
                <div className="row">
                 

                  <div className="col-md-12 ">
                    <h5>Descripción</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
                <hr />

              </div>
            </article>

            <h2>Comentarios</h2>
            {/* <div>
              <label>Comenta:</label>
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  saveComment()
                }}>
                  <input type={'text'} onChange={(e) => {
                    setComment(e.target.value)
                  }} />
                  <button type={"submit"}>Enviar
                  </button>
                </form>
              </div>
              <br />
            </div>

            {
              post && post.map(post => <div key={post.id}>
                {post.username}

                {post.message}
              </div>)
            }

          // </div> */}
          </div>
        </section>





      </div>
      {/* <div className="container screens container-screens bordered rounded mt-4  animate__animated  animate__fadeIn">
        <div className="row">
          <h1 className="text-center pt-5">{name}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 ">
            <h5 className="text-center pb-3 screem">
              <span>Altura:</span> {height}
            </h5>

            <h5 className="text-center pb-3 screem">
              <span>Año de Cumpleaños:</span> {birth_year}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Color de cabello:</span> {hair_color}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Tono de piel:</span> {skin_color}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Color de ojos:</span> {eye_color}
            </h5>

            <h5 className="text-center pb-3 screem">
              <span>Genero:</span> {gender}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Masa:</span> {mass}
            </h5>
          </div>

          <div className="col-md-6">
            <h2 className="text-center pb-3">Description:</h2>
            <p className=" text-center mb-5 me-md-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nibh quis ligula semper tempor. Nulla quis turpis quis
              diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
              pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
              pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
              velit sapien, tempus et quam in, ultrices sollicitudin tellus.
              Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
              lacinia orci ac felis dictum mattis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent viverra nibh quis ligula
              semper tempor. Nulla quis turpis quis diam sodales iaculis. Duis
              id luctus mi. Praesent sollicitudin pretium elit quis bibendum.
              Nullam ut nunc ipsum. Pellentesque non pharetra est. Quisque eu
              eros vel lorem tristique sodales. Aenean velit sapien, tempus et
              quam in, ultrices sollicitudin tellus. Vivamus vehicula porttitor
              lacus suscipit fringilla. Maecenas lacinia orci ac felis dictum
              mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent viverra nibh quis ligula semper tempor. Nulla quis turpis
              quis diam sodales iaculis. Duis id luctus mi. Praesent
              sollicitudin pretium elit quis bibendum. Nullam ut nunc ipsum.
              Pellentesque non pharetra est. Quisque eu eros vel lorem tristique
              sodales. Aenean velit sapien, tempus et quam in, ultrices
              sollicitudin tellus. Vivamus vehicula porttitor lacus suscipit
              fringilla. Maecenas lacinia orci ac felis dictum mattis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nibh quis ligula semper tempor. Nulla quis turpis quis
              diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
              pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
              pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
              velit sapien, tempus et quam in, ultrices sollicitudin tellus.
              Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
              lacinia orci ac felis dictum mattis.
            </p>
          </div>
          <button
            className="justify-content-center py-2 mb-3 "
            onClick={handleReturn}
          >
            Pagar
          </button>
        </div>
      </div> */}
      <Comments />
    </Fragment>
  );
};
