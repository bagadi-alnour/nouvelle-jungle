import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "../header";
import NavbarAdmin from "../navbarAdmin";
import { fr } from "date-fns/locale";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false
    };
  }
  componentDidMount() {
    axios
      .get("api/event/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data,
            isLoading: true
          });
        } else {
          console.log("There is no data in the db");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  // Delete an event
  deleteEvent = id => {
    axios.delete("/api/event/" + id).then(response => alert(response.data));
    if (this.isLoading) {
      this.setState({
        events: this.state.events.filter(el => el._id !== id)
      });
      setTimeout(() => {
        window.location = "/eventList";
      }, 2000);
    }
  };
  render() {
    const event = this.state.events.map((e, index) => {
      e.date = formatDistanceToNow(new Date(e.date.replace(/-/g, ",")), {
        includeSeconds: true,
        addSuffix: true,
        locale: fr
      });

      return (
        <div className="col-lg-6 my-4 border-bottom pb-2">
          <div className="card-group mb-3 ">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{e.name}</h3>

                <h4 className="card-text">
                  <small className="text-muted h5">
                    {" "}
                    Date : {e.date} à {e.time}
                  </small>
                </h4>
                <p className="card-text font-weight-bold">
                  {" "}
                  l'Adresse : {e.address}
                </p>
                <p className="card-text text-justify">{e.description}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => this.deleteEvent(e._id)}
            className="btn btn-danger"
          >
            Supprimmer
          </button>
        </div>
      );
    });

    if (this.state.isLoading === false) {
      return (
        <div className="container text-center">
          <Loader
            type="ThreeDots"
            color="#138496"
            height={160}
            width={100}
            timeout={10000} //3 secs
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <NavbarAdmin />
          <Header title="Liste des évenement" />
          <div className="row">{event}</div>
          {this.state.events.length < 1 ? (
            <div className="text-center h1">Il n'y a pas de évenement'</div>
          ) : null}
        </div>
      );
    }
  }
}
