import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "./header";
import img from "./img/jungle.jpg";
import HeaderTwo from "./headerTwo";
export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      threeArticles: [],
      isLoading: false
    };
  }
  componentDidMount() {
    axios
      .get("/api/article/after")
      .then(response => this.setState({ articles: response.data }))
      .catch(err => console.log(err));
    axios
      .get("/api/article/3")
      .then(response =>
        this.setState({ threeArticles: response.data, isLoading: true })
      )
      .catch(err => console.log(err));
  }
  showArticle = id => {
    window.location = "/article/" + id;
  };

  render() {
    // Two main articles
    const threeArticles = this.state.threeArticles.map(article => {
      return (
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
          <button
            className="btn p-0 m-0"
            onClick={() => this.showArticle(article._id)}
          >
            <div className="card text-left">
              {article.imageURL ? (
                <img
                  style={{ objectFit: "cover", height: "400px", width: "100%" }}
                  src={article.imageURL}
                  className="card-img img-fluid"
                  alt="article cover"
                />
              ) : null}
              <div className="card-img-overlay">
                <div className="align-items-end text-white p-2 card-text-1">
                  <HeaderTwo title={article.title} />
                  <strong>
                    {article.createdAt.slice(0, 10).replace(/-/g, "/")}
                  </strong>
                  <p>{article.text.slice(0, 40)}</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      );
    });
    // Older articles
    const articlesList = this.state.articles.map(article => {
      return (
        <div className="col-lg-4 col-md-4 col-sm-12 xs-12 pb-2">
          <button
            className="btn p-0 m-0"
            onClick={() => this.showArticle(article._id)}
          >
            <div className="card text-left">
              <img
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                src={article.imageURL}
                className="card-img img-fluid"
                alt="article cover"
              />
              <div className="card-img-overlay  ">
                <div className="align-items-end text-white p-2  card-text-2">
                  <HeaderTwo title={article.title} />

                  <strong>
                    {article.createdAt.slice(0, 10).replace(/-/g, "/")}
                  </strong>
                  <p>{article.text.slice(0, 40)}</p>
                </div>
              </div>
            </div>
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
            height={100}
            width={100}
            timeout={20000} //3 secs
          />
        </div>
      );
    }
    if (this.state.isLoading === true) {
      return (
        <div className="container" style={{ marginBottom: "65px" }}>
          <Header title="Articles" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            aperiam at deserunt, quibusdam quae quisquam saepe est ullam nemo,
            doloribus soluta eligendi? Optio nulla corrupti iste nostrum
            assumenda doloremque magni?
          </p>
          <div className="row my-5">{threeArticles}</div>
          <hr className="my-4 bg-info" />
          <div className="row my-5">{articlesList}</div>
        </div>
      );
    }
  }
}
