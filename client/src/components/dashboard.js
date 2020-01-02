import React, { Component } from "react";
import NavbarAdmin from "./navbarAdmin";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  render() {
    return (
      <div className="mt-5 container">
        <NavbarAdmin />
      </div>
    );
  }
}
