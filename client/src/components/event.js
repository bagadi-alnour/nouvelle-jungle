import React, { Component, Fragment } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "./header";
import compareAsc from "date-fns/compareAsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faCalendarDay,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

export default class Event extends Component {
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

  render() {
    const t = new Date();
    const today =
      t.getFullYear() + "," + (t.getMonth() + 1) + "," + t.getDate();
    const loading = () => {
      if (this.state.events.length > 0) {
        return (
          <div className="container">
            <Loader
              type="ThreeDots"
              color="#138496"
              height={100}
              width={100}
              timeout={10000} //10 secs
            />
          </div>
        );
      } else {
        return (
          <div className="container my-5">
            {this.state.isLoading ? (
              <h1>
                {" "}
                <span style={{ fontSize: "50px", color: "red" }}>
                  <FontAwesomeIcon icon={faExclamationTriangle} siz={30} />{" "}
                  {"  "} il n'y a aucun évènement
                </span>
              </h1>
            ) : null}
          </div>
        );
      }
    };
    const event = this.state.events.map(e => {
      if (
        compareAsc(new Date(e.date.replace(/-/g, ",")), new Date(today)) === 1
      ) {
        //future events
        return (
          <div className="col-lg-6 col-sm-6 my-5">
            <div className="card-group mb-3">
              <div className="card">
                <img
                  style={{ objectFit: "cover", height: "450px" }}
                  class="card-img-top"
                  alt="cover"
                  src={e.img}
                />
                <div className="card-body">
                  <h3 className="card-title">{e.name}</h3>
                  <h5 className="card-text text-muted">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faCalendarDay}
                    />{" "}
                    : {e.date.replace(/-/g, "/")} {" - "}
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faClock}
                    />{" "}
                    {e.time}
                  </h5>
                  <p className="card-text">l'Adresse : {e.address}</p>
                  <p className="card-text text-justify">{e.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    const eventArchieve = this.state.events.map(e => {
      if (
        compareAsc(new Date(e.date.replace(/-/g, ",")), new Date(today)) === -1
      ) {
        //Past Events

        return (
          <div className="col-lg-4">
            <div className="card-group mb-3">
              <div className="card">
                <img
                  class="card-img-top"
                  src={e.img}
                  alt="Card  cover"
                  style={{ objectFit: "cover", height: "300px", width: "100%" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{e.name}</h3>
                  <h5 className="card-text text-muted">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faCalendarDay}
                    />{" "}
                    : {e.date.replace(/-/g, "/")}{" "}
                    <FontAwesomeIcon color="red" icon={faClock} /> {e.time}
                  </h5>
                  <p className="card-text font-weight-bold text-muted">
                    l'Adresse : {e.address}
                  </p>
                  <p className="card-text text-justify">{e.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    return (
      <Fragment className="mb-5">
        {this.state.isLoading ? (
          <div className="container">
            <Header title="l'événement " />
            <h3 className="text-justify">
              ICI vous trouvez nos prochains événements
            </h3>
            <div className="row">{event}</div>
          </div>
        ) : (
          loading()
        )}

        {this.state.isLoading ? (
          <div className="container mb-5">
            <div className="mt-5">
              <hr />
            </div>
            <Header title="l'Archive de nos événement" />
            <p className="text-justify my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              natus doloremque officia eum doloribus exercitationem, est amet
              rem numquam iure ullam ratione laborum, velit ipsa facilis
              quisquam porro, cumque consequatur! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit deserunt id commodi
              temporibus vitae rerum quod aut ipsum, inventore consectetur?
              Nihil dicta omnis animi nesciunt similique amet minima voluptas
              vel.
            </p>
            <div className="row my-4 ">{eventArchieve}</div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
