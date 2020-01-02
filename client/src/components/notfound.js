import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          {" "}
          <span style={{ fontSize: "50px", color: "red" }}>
            <FontAwesomeIcon icon={faExclamationTriangle} siz={30} /> {"  "}{" "}
            Page not found
          </span>
        </h1>
      </div>
    );
  }
}
