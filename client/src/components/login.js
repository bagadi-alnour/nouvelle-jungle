import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import authentication from "./authentication";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }
  passwordChanged = e => {
    this.setState({ password: e.target.value });
  };
  emailChanged = e => {
    this.setState({ email: e.target.value });
  };
  login = e => {
    e.preventDefault();
    const { password, email } = this.state;
    const adminInfo = { password, email };
    axios.post("/api/admin/login", adminInfo).then(res => {
      if (res.data === "OK") {
        authentication.login(() => {
          localStorage.setItem("isAuth", (authentication.authenticated = true));
          this.props.history.push("/dashboard");
        });
      } else {
        alert(res.data);
      }
    });
  };
  render() {
    const className =
      "form-control border-danger border-top-0 border-right-0 border-left-0 bg-light";
    return (
      <div className="container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            <FontAwesomeIcon icon={faSignOutAlt} /> Login
          </h2>

          <div className="row justify-content-md-center">
            <div className="col-md-12 col-lg-6  mb-md-0 mb-5">
              <form onSubmit={this.login}>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="md-form mb-0">
                      <label>email:</label>
                      <input
                        type="text"
                        className={className}
                        required
                        onChange={this.emailChanged}
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-6">
                    <div className="md-form mb-0">
                      <label>password:</label>
                      <input
                        type="password"
                        className={className}
                        required
                        onChange={this.passwordChanged}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button type="submit" className="btn btn-success mt-3">
                    <FontAwesomeIcon icon={faSignOutAlt} /> {"  "}
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
