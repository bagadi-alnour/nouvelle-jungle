import React, { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../navbarAdmin";
import Header from "../header";
import {
  REACT_APP_CLOUDINARY_cloud_NAME,
  REACT_APP_CLOUDINARY_UPLOAD_SECRET
} from "../global";
const ArticleAdd = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [imageLegend, setimageLegend] = useState("");
  const [text, settext] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [msg, setMsg] = useState("");
  const titleChange = e => {
    settitle(e.target.value);
  };
  const authorChange = e => {
    setauthor(e.target.value);
  };
  const imageLegendChange = e => {
    setimageLegend(e.target.value);
  };
  const textChange = e => {
    settext(e.target.value);
  };
  const addArticle = e => {
    e.preventDefault();
    const newArtilce = { title, author, imageLegend, imageURL, text };
    if (!imageURL) {
      setMsg("Il faut ajouter un image");
    } else {
      axios.post("/api/article/add", newArtilce).then(res => {
        setMsg("L'article vient d'être ajouter");
        window.location = "/articlesList";
      });
    }
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: REACT_APP_CLOUDINARY_cloud_NAME,
        upload_preset: REACT_APP_CLOUDINARY_UPLOAD_SECRET,
        tags: ["article"]
      },
      function(error, result) {
        setimageURL(result[0].secure_url);
      }
    );
  };
  return (
    <div className="container" style={{ marginBottom: "60px" }}>
      <NavbarAdmin />
      <Header title="Ajouter un Article" />
      {msg ? (
        <div class="alert alert-success my-2" role="alert">
          {msg}
        </div>
      ) : null}
      <form onSubmit={addArticle}>
        <div className="form-group">
          <button
            onClick={() => uploadWidget()}
            className="btn-outline-default btn-block p-1"
            required
          >
            Uploud image
          </button>
        </div>
        {imageURL ? (
          <div className="container">
            <img className="img-fluid my-3" src={imageURL} alt="cover" />
          </div>
        ) : null}

        <div className="form-group">
          <label>Titre</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Le titre de votre article"
            onChange={titleChange}
          />
        </div>
        <div className="form-group">
          <label>Author de l'article</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Pierre Petit.."
            onChange={authorChange}
          />
        </div>
        <div className="form-group">
          <label>Lengend d'image</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image par : ...."
            onChange={imageLegendChange}
          />
        </div>
        <div className="form-group">
          <label>Le texte de L'article</label>
          <textarea
            required
            className="form-control"
            rows="15"
            onChange={textChange}
          />
        </div>

        <input
          className="btn btn-lg btn-success"
          type="submit"
          value="Ajouter"
        />
      </form>
    </div>
  );
};
export default ArticleAdd;
