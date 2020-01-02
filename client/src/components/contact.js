import React, { Component } from "react";
import axios from "axios";
import Header from "./header";
import { ToastContainer, toast } from "react-toastify";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
  nameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  mailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  subjectChange = e => {
    this.setState({ subject: e.target.value });
  };
  messageChange = e => {
    this.setState({ message: e.target.value });
  };
  sendContact = e => {
    e.preventDefault();
    let { name, email, subject, message } = this.state;
    let regExpr = /[^a-zA-Z0-9-. ]/g;
    name = name.replace(regExpr, "");
    subject = subject.replace(regExpr, "");
    message = message.replace(regExpr, "");
    const contactInfo = {
      name,
      email,
      subject,
      message
    };
    axios.post("/api/contact/add", contactInfo).then(res => {
      toast.warn(res.data);
      toast.success("Nous allons vous contacter le plus rapide possible");
    });
    setTimeout(() => {
      window.location = "/contact";
    }, 5000);
  };
  render() {
    const className =
      "form-control border-dark border-top-0 border-right-0 border-left-0 bg-light";
    return (
      <div className="container">
        <ToastContainer
          className="my-5"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <section className="mb-4">
          <div className="row justify-content-md-center">
            <div className="col-md-6 mb-md-0 mb-5">
              <Header title="Contactez-nous" />
              <p className="mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                nesciunt ullam corrupti itaque assumenda culpa dolore repellat
                ducimus iure laboriosam, aspernatur quidem consequatur ad
                adipisci facilis dicta qui impedit repellendus.
              </p>
              <form onSubmit={this.sendContact}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label>Votre nom :</label>
                      <input
                        onChange={this.nameChange}
                        type="text"
                        className={className}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label>Votre adresse mail :</label>
                      <input
                        onChange={this.mailChange}
                        type="email"
                        className={className}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label>Sujet :</label>
                      <input
                        onChange={this.subjectChange}
                        type="text"
                        className={className}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label>Votre message :</label>
                      <textarea
                        onChange={this.messageChange}
                        rows="10"
                        className={className}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <input
                    type="submit"
                    className="btn btn-lg btn-outline-info mt-2"
                    value="Envoyer"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
