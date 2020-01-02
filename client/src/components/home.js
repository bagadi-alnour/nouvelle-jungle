import React, { Component, Fragment } from "react";
import Header from "./header";
import "../App.css";

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <div className="container">
            <Header title="Bienvune À la Nouvelle Jungle " />
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dignissimos nemo nulla in neque? Maxime, eveniet ipsa! Quam
            </p>
            <hr className="my-4 bg-info" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="text-center py-3">
                <img
                  src="https://via.placeholder.com/170"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <h2 className="tex-center">Header</h2>
              <p className="p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quos alias corporis adipisci exercitationem obcaecati sed soluta
                explicabo eum veniam consectetur, esse doloribus quae nisi
                eligendi laudantium quasi culpa. Dolorem.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="text-center py-3">
                <img
                  src="https://via.placeholder.com/170"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <h2 className="tex-center">Header</h2>
              <p className="p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quos alias corporis adipisci exercitationem obcaecati sed soluta
                explicabo eum veniam consectetur, esse doloribus quae nisi
                eligendi laudantium quasi culpa. Dolorem.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="text-center py-3">
                <img
                  src="https://via.placeholder.com/170"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <h2 className="tex-center">Header</h2>
              <p className="p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quos alias corporis adipisci exercitationem obcaecati sed soluta
                explicabo eum veniam consectetur, esse doloribus quae nisi
                eligendi laudantium quasi culpa. Dolorem.
              </p>
            </div>
          </div>
          <hr class="my-4 bg-info" />
        </div>
      </Fragment>
    );
  }
}
