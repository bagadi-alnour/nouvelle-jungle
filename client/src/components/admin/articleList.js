import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ReadMoreAndLess from "react-read-more-less";
import NavbarAdmin from "../navbarAdmin";
import Header from "../header";
import HeaderTwo from "../headerTwo";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/article/")
      .then(response => this.setState({ articles: response.data }))
      .catch(err => console.log(err));
  }

  //Delete article by id
  deleteArticle = id => {
    axios
      .delete("/api//article/" + id)
      .then(response => toast.success(response.data));
    this.setState({
      articles: this.state.articles.filter(el => el._id !== id)
    });
  };
  //update article
  update = id => {
    window.location = "article/update/" + id;
  };
  render() {
    const legendStyle = {
      paddingBottom: "-2",
      textAlgin: "center"
    };

    const articleList = this.state.articles.map(article => {
      return (
        <div class="card-group mt-2 ">
          <div class="card">
            <div className="card-body">
              <HeaderTwo className="card-title" title={article.title} />
              <small className="text-muted h6">Par: {article.author}</small>
              <small className="text-muted h6 d-block  pb-1 pt-1">
                publié : {article.createdAt.slice(0, 10).replace(/-/g, "/")}
              </small>
              <small className="float-left pr-1">
                <img
                  className="card-img-top img-fluid"
                  src={article.imageURL}
                  alt="Card"
                />

                <p
                  style={legendStyle}
                  className="d-block text-danger text-center "
                >
                  {article.imageLegend}
                </p>
              </small>
              <ReadMoreAndLess
                style={{}}
                ref={this.ReadMore}
                className="read-more-conten "
                charLimit={1190}
                readMoreText="Read more"
                readLessText="Read less"
              >
                {article.text}
              </ReadMoreAndLess>
            </div>
            <div class="card-footer">
              <button
                className="btn btn-danger mr-2"
                onClick={() => this.deleteArticle(article._id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Supprimer
              </button>
              <button
                className="btn btn-info text-center"
                onClick={() => this.update(article._id)}
              >
                <FontAwesomeIcon icon={faEdit} /> Modifier
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div style={{ marginBottom: "90px" }} className="container">
        <NavbarAdmin />
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
        <Header title="Liste des articles" />
        {articleList}
      </div>
    );
  }
}
