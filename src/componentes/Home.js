import React, { useEffect, useState, useContext } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CardProduct } from "./UI/CardProduct";

// import { act } from "react-dom/test-utils";
export const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actual, setActual] = useState(
    `http://localhost:3000/Producto/BuscarProducto`
  );

  const fetchProduct = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    try {
      const query = () => {
        fetchProduct(actual)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setLoading(true);
            console.log(data);
            setProduct(data.listaproducto);
          })
          .catch((error) => {
            console.error(error);
          });
          localStorage.removeItem("productoBusqueda")
      };
      if (JSON.parse(localStorage.getItem("productoBusqueda"))) {
        setProduct(JSON.parse(localStorage.getItem("productoBusqueda")))
      } else {
        query();
      }
    } catch (error) {
      console.error(error);
    }
  }, [actual]);

  return (
    <div className="container-fluid body_info">
      <div className="box">
        {product ? (
          product.map((product) => {
            return <CardProduct product={product} key={product.url} />;
          })
        ) : (
          <ReactBootStrap.Spinner animation="grow" variant="warning" />
        )}
        {}
      </div>
    </div>
  );
};
