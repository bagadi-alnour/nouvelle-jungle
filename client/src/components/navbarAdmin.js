import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
const logout = () => {
  localStorage.clear();
  console.log("logging out");
  window.location = "/";
};
export default class NavbarAdmin extends Component {
  render() {
    return (
      <div className="my-5">
        <h1 className="display-4  text-danger font-weight-bold">
          <FontAwesomeIcon icon={faUser} /> {"  "}Dashboard
          <button
            style={{ padding: 12 }}
            className="btn btn-danger btn-md float-right m-1"
            type="submit"
            onClick={logout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> {"  "}
            Logout
          </button>
        </h1>

        <Navbar bg="light border  text-dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className="text-dark h5" to="/contact/list">
                  Contact
                </Link>
              </Nav.Link>
              <NavDropdown
                className="h5"
                title="Articles"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/article/add">Ajouter une article</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/articlesList">Liste des articles</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="text-dark h5"
                title="Evenements"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/event-add">Céer un évenement</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/eventList">Liste des evenemnt</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="h5"
                title="Lille Nomade"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="text-dark" to="/lille-nomade/add">
                    Ajouter un numéro
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/eventList">Liste des numéros</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
