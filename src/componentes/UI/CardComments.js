import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const CardComments = ({ planets }) => {
  let {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = planets;
  console.log(planets);
  return (
    <Fragment>
      <div className="card mx-5 my-3  bg-light">
        <div className="card-body row">
          <div className="col-md-6">
            <h2 className="card-title text-center py-4">{name}</h2>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <span>Rotation Period:</span> {rotation_period}
            </p>
            <p className="card-text">
              <span>Orbital Period:</span> {orbital_period}
            </p>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            viverra nibh quis ligula semper tempor. Nulla quis turpis quis diam
            sodales iaculis. Duis id luctus mi. Praesent sollicitudin pretium
            elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non pharetra
            est. Quisque eu eros vel lorem tristique sodales. Aenean velit
            sapien, tempus et quam in, ultrices sollicitudin tellus. Vivamus
            vehicula porttitor lacus suscipit fringilla. Maecenas lacinia orci
            ac felis dictum mattis.
          </div>
        </div>
      </div>
    </Fragment>
  );
};
