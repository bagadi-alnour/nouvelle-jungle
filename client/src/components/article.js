import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUser,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";
import { fr } from "date-fns/locale";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import HeaderTwo from "./headerTwo";

const Article = ({ match }) => {
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get("/api/article/" + match.params.id).then(res => {
      setArticle(res.data);
      setIsLoading(true);
    });
  });
  if (isLoading === true) {
    const d = article.createdAt
      .replace(/-/g, ",")
      .replace(/:/g, ",")
      .slice(0, 10)
      .replace(/T/, ",");
    const nd = formatDistanceToNow(new Date(d), {
      addSuffix: true,
      locale: fr
    });
    article.createAt = nd;

    return (
      <div className="container my-5">
        <HeaderTwo title={article.title} />
        <h4 className="text-muted">
          <FontAwesomeIcon icon={faUser} /> : {article.author}
        </h4>
        <div className="text-muted">
          <FontAwesomeIcon icon={faCalendarDay} /> : {article.createAt}
        </div>
        {article.imageURL ? (
          <img
            src={article.imageURL}
            style={{ objectFit: "cover", height: "600px", width: "100%" }}
            alt="cover"
            className="p-0 mt-4 img-fluid"
          />
        ) : null}
        {article.imageLegend ? (
          <p className="text-center mb-3">{article.imageLegend}</p>
        ) : null}

        <p className="text-justify">{article.text}</p>
        <hr />
        <button
          className="btn btn-outline-info btn-lg"
          onClick={() => (window.location = "/articles")}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Liste des articles
        </button>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <Loader
          type="ThreeDots"
          color="#138496"
          height={100}
          width={100}
          timeout={10000} //3 secs
        />
      </div>
    );
  }
};

export default Article;
