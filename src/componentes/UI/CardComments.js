import React, { Fragment } from "react";

export const CardComments = ({ comment }) => {
  const { idusuario, fechacomentario, comentario } = comment;
  const formattedDate = new Date(fechacomentario);
  console.log("formattedDate", formattedDate);

  return (
    <Fragment>
      <div className="card mx-5 my-3  bg-light">
        <div className="card-body row">
          <div className="col-md-6">
            <h2 className="card-title text-center py-4">{idusuario}</h2>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <span>Fecha:</span> {formattedDate.toLocaleString()}
            </p>
            <p className="card-text">
              <span>Comentario:</span> {comentario}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
