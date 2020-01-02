import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../header";
import NavbarAdmin from "../navbarAdmin";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      msg: null,
      noMsg: null,
      isLoading: false
    };
  }
  componentDidMount() {
    axios.get("/api/contact/").then(response => {
      if (response.data.length < 0) {
        this.setState({
          noMsg: "There is no message",
          msg: null
        });
      } else {
        this.setState({
          message: response.data,
          msg: "Vous avez " + response.data.length + " messages",
          isLoading: true
        });
      }
    });
  }
  deleteContact = id => {
    axios.delete("/api/contact/" + id).then(response => alert(response.data));
    this.setState({
      message: this.state.message.filter(el => el._id !== id)
    });
    window.location = "/contact/list";
  };
  render() {
    const messagesList = this.state.message.map((m, index) => {
      return (
        <div className="col-6 p-2 ">
          <div class="card bg-light mb-3">
            <div class="card-header">
              De : <small className="text-primary h6">{m.email}</small>{" "}
            </div>
            <div class="card-header">
              Nom : <small className="text-primary h6">{m.name}</small>
            </div>
            <div class="card-body">
              <p class="card-title">
                Sujet : <small className="text-primary h6">{m.subject}</small>
              </p>
              <p class="card-text">
                Le Message : <br />
                <small className="text-dark h6">{m.message}</small>
              </p>
              <hr />
              <button
                className="btn btn-md btn-danger mt-0"
                type="submit"
                onClick={() => this.deleteContact(m._id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Supprimer
              </button>
            </div>
          </div>
        </div>
      );
    });
    if (this.state.isLoading === false) {
      return (
        <div className="container my-5 text-center">
          <Loader
            type="Watch"
            color="#138496"
            height={100}
            width={100}
            timeout={10000} //3 secs
          />
        </div>
      );
    }
    if (this.state.isLoading === true) {
      return (
        <div className="container my-5">
          <NavbarAdmin />
          <Header title="Liste des messages" />
          <h3 className="text-success">{this.state.msg}</h3>
          <div className="row  mt-5 mb-5">{messagesList}</div>
        </div>
      );
    }
  }
}
