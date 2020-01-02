import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    const footerStyle = {
      position: "absolute",
      bottom: "0"
    };
    return (
      <footer
        style={footerStyle}
        className="page-footer fixed-bottom font-small cyan darken-3 bg-dark mt-5"
      >
        <div className="footer-copyright text-center text-white py-2">
          Made by{" "}
          <a
            className="text-white"
            href="https://www.linkedin.com/in/bagadi-alnour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bagadi
          </a>
        </div>
      </footer>
    );
  }
}
