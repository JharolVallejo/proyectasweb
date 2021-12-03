import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const CardProduct = ({ product }) => {
  let { productonombre, marca } = product;

  return (
    <Fragment>
      <div className="info_products">
        <div>Nombre: {productonombre}</div>
        <div>Marca: {marca}</div>
        <p className="card-text">
          <Link
            className="nav-item nav-link login"
            to={`/producto/${productonombre}`}
          >
            More
          </Link>
        </p>
      </div>
    </Fragment>
  );
};
