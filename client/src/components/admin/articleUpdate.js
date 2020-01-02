import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default class ArticleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      text: "",
      imageLegend: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/article/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          author: res.data.author,
          title: res.data.title,
          text: res.data.text,
          imageLegend: res.data.imageLegend
        });
      })
      .catch(err => console.log(err));
  }
  authorChange = e => {
    this.setState({ author: e.target.value });
  };
  textChange = e => {
    this.setState({ text: e.target.value });
  };
  imageLegendChange = e => {
    this.setState({ imageLegend: e.target.value });
  };
  titleChange = e => {
    this.setState({ title: e.target.value });
  };

  articleUpdate = e => {
    e.preventDefault();
    const { title, author, imageLegend, text } = this.state;
    const article = { title, author, imageLegend, text };
    axios
      .post("/api/article/update/" + this.props.match.params.id, article)
      .then(res => toast.success(res.data));
    setTimeout(() => {
      window.location = "/articlesList";
    }, 3000);
  };
  render() {
    return (
      <div className="container my-5">
        <ToastContainer
          className="my-5"
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <form onSubmit={this.articleUpdate}>
          <div class="form-group">
            <label htmlfor="title">Titre</label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={this.state.title}
              onChange={this.titleChange}
            />
          </div>
          <div class="form-group">
            <label htmlfor="author">Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              value={this.state.author}
              onChange={this.authorChange}
            />
          </div>
          <div class="form-group">
            <label htmlfor="imageLegend">Image Legend</label>
            <input
              type="text"
              class="form-control"
              id="imageLegend"
              value={this.state.imageLegend}
              onChange={this.imageLegendChange}
            />
          </div>
          <div class="form-group">
            <label htmlfor="text">Texte</label>
            <textarea
              type="text"
              class="form-control"
              id="text"
              rows="12"
              value={this.state.text}
              onChange={this.textChange}
            />
          </div>
          <input
            className="btn btn-success"
            type="submit"
            value="Mettre à jour"
          />
        </form>
      </div>
    );
  }
}
