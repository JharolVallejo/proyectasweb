import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { CardProduct } from "./UI/CardProduct";

// import { act } from "react-dom/test-utils";
export const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actual, setActual] = useState(`http://localhost:9090/Producto/BuscarProducto`);

  const fetchProduct = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchProduct(actual)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(true);
        setProduct(data);
      });
  }, [actual]);

  return (
    <div className="container-fluid body_info">
      <div className="box">
        {loading ? (
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
