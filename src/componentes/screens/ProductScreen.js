import React, { Fragment, useEffect, useState } from "react";
import "./ProductScreen.css";
import { useParams, useHistory } from "react-router-dom";
import { CardComments } from "../UI/CardComments";
import Placeholder from "../../assets/img/placeholder.jpeg";

export const ProductScreen = () => {
  const { productonombre } = useParams();
  let history = useHistory();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack("/");
    }
  };

  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    try {
      const getProduct = async () => {
        const res = await fetch(
          `http://localhost:9090/Producto/filter/${productonombre}`
        );
        const data = await res.json();
        setProduct(data[0]);
        getProductComments(data[0]);
      };
      const getProductComments = async (product) => {
        try {
          const res = await fetch(
            `http://localhost:9090/comentarios/${product.idproducto}`
          );
          const data = await res.json();
          console.log("data", data);
          setComments(data);
        } catch (error) {
          console.error(error);
        }
      };
      getProduct();
    } catch (error) {}
  }, [productonombre]);

  return (
    <Fragment>
      <div className="App">
        {product ? (
          <section className={"section-content padding-y bg"}>
            <div className="container">
              <article className="card">
                <div className={"card-body"}>
                  <div className={"row"}>
                    <aside className={"col-md-6"}>
                      <article className={"gallery-wrap"}>
                        <div className={"card img-big-wrap"}>
                          <a href="#!">
                            <img
                              alt={product.productonombre}
                              src={
                                product.imagen ? product.imagen : Placeholder
                              }
                            />
                          </a>
                        </div>
                        <div className={"thumbs-wrap"}>
                          <a href="#" className={"item-thumb"}>
                            {" "}
                            <img src={"images/caja.png"} />
                          </a>
                          <a href="#" className={"item-thumb"}>
                            {" "}
                            <img src={"assets/3.jpg"} />
                          </a>
                          <a href="#" className={"item-thumb"}>
                            {" "}
                            <img src={"assets/3.jpg"} />
                          </a>
                          <a href="#" className={"item-thumb"}>
                            {" "}
                            <img src={"assets/3.jpg"} />
                          </a>
                        </div>
                      </article>
                    </aside>
                    <main className={"col-md-6"}>
                      <article>
                        <a href="#" className={"text-primary btn-link"}>
                          Categoría
                        </a>
                        <h3 className="title"> {product.productonombre} </h3>
                        <div>
                          <ul className={"rating-stars"}>
                            <li className={"stars-active"}>
                              <i className={"fa fa-star"}></i>{" "}
                              <i className={"fa fa-star"}></i>
                              <i className={"fa fa-star"}></i>
                            </li>
                            <li>
                              <i className={"fa fa-star"}></i>{" "}
                              <i className={"fa fa-star"}></i>
                              <i className={"fa fa-star"}></i>{" "}
                              <i className={"fa fa-star"}></i>
                              <i className={"fa fa-star"}></i>
                            </li>
                          </ul>
                          <span className={"label-rating mr-3 text-muted"}>
                            10/10
                          </span>
                        </div>

                        <hr />

                        <div className={"mb-3"}>
                          <h6>Resumen</h6>
                          <ul className={"list-dots mb-0"}>
                            <li>{product.descripcion}</li>
                          </ul>
                        </div>

                        <div className={"mb-3"}>
                          <h6>Marca</h6>
                          <ul className={"list-dots mb-0"}>
                            <li>{product.marca}</li>
                          </ul>
                        </div>

                        <div className="mb-3">
                          <var className="price h4">$ {product.valor} </var>{" "}
                          <br />
                        </div>

                        <div className="mb-4">
                          <a href="#" className="btn btn-info mr-1">
                            Comprar
                          </a>
                          <a href="#" className="btn btn-light">
                            Agregar al carrito
                          </a>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </article>

              <h2>Comentarios</h2>
              {comments.map((comment) => (
                <CardComments comment={comment} />
              ))}
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

        </div> */}
            </div>
          </section>
        ) : null}
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

      {/* <div class="factura">
      <div class="panel-body">
                    <div class="table-responsive">
                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <td><strong>Item Name</strong></td>
                                    <td class="text-center"><strong>Item Price</strong></td>
                                    <td class="text-center"><strong>Item Quantity</strong></td>
                                    <td class="text-right"><strong>Total</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Samsung Galaxy S5</td>
                                    <td class="text-center">$900</td>
                                    <td class="text-center">1</td>
                                    <td class="text-right">$900</td>
                                </tr>
                                <tr>
                                    <td>Samsung Galaxy S5 Extra Battery</td>
                                    <td class="text-center">$30.00</td>
                                    <td class="text-center">1</td>
                                    <td class="text-right">$30.00</td>
                                </tr>
                                <tr>
                                    <td>Screen protector</td>
                                    <td class="text-center">$7</td>
                                    <td class="text-center">4</td>
                                    <td class="text-right">$28</td>
                                </tr>
                                <tr>
                                    <td class="highrow"></td>
                                    <td class="highrow"></td>
                                    <td class="highrow text-center"><strong>Subtotal</strong></td>
                                    <td class="highrow text-right">$958.00</td>
                                </tr>
                                <tr>
                                    <td class="emptyrow"></td>
                                    <td class="emptyrow"></td>
                                    <td class="emptyrow text-center"><strong>Shipping</strong></td>
                                    <td class="emptyrow text-right">$20</td>
                                </tr>
                                <tr>
                                    <td class="emptyrow"><i class="fa fa-barcode iconbig"></i></td>
                                    <td class="emptyrow"></td>
                                    <td class="emptyrow text-center"><strong>Total</strong></td>
                                    <td class="emptyrow text-right">$978.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div> */}
    </Fragment>
  );
};
