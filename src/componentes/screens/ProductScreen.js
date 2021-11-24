import React, { Fragment } from "react";
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
    <div className="container screens container-screens bordered rounded mt-4  animate__animated  animate__fadeIn">
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
      </div>
      <Comments/>
      </Fragment>
  );
};
