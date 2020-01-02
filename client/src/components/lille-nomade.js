import React from "react";
import Header from "./header";
import numberOne from "./img/lille-nomade-numero01.pdf";
import HeaderTwo from "./headerTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const LilleNomade = () => {
  return (
    <div className="container">
      <div className="col-lg">
        <Header title="Lille nomade - le journal" />
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore
          quasi ad obcaecati accusantium saepe quaerat officia officiis velit,
          aliquid nulla excepturi incidunt consectetur a facere cumque minus
          perferendis sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum, expedita. Perferendis reiciendis accusantium magni
          quis commodi sapiente laudantium obcaecati sed placeat quod ipsam
          quasi, veniam excepturi et porro enim aliquam!
        </p>
      </div>
      <div className="col mb-3">
        <Header title="Les numéros du Journal" />
        <div className="border rounded p-2">
          <HeaderTwo title="Numéro 3" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            veritatis nulla laborum, cumque vitae recusandae laboriosam. Ducimus
            error soluta asperiores corrupti vero, voluptatem porro, temporibus
            perspiciatis cupiditate non, nulla explicabo.
          </p>
          <a
            className="btn btn-lg btn-outline-info"
            href={numberOne}
            download="w3logo"
          >
            <FontAwesomeIcon icon={faDownload} /> Télécharger le numéro
          </a>
        </div>
      </div>
      <div className="col mb-3">
        <div className="border rounded p-2">
          <HeaderTwo title="Numéro 2" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            veritatis nulla laborum, cumque vitae recusandae laboriosam. Ducimus
            error soluta asperiores corrupti vero, voluptatem porro, temporibus
            perspiciatis cupiditate non, nulla explicabo.
          </p>
          <a
            className="btn btn-lg btn-outline-info"
            href={numberOne}
            download="w3logo"
          >
            <FontAwesomeIcon icon={faDownload} /> Télécharger le numéro
          </a>
        </div>
      </div>
      <div className="col mb-3 mb-5 ">
        <div className="border rounded p-2">
          <HeaderTwo title="Numéro 1" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            veritatis nulla laborum, cumque vitae recusandae laboriosam. Ducimus
            error soluta asperiores corrupti vero, voluptatem porro, temporibus
            perspiciatis cupiditate non, nulla explicabo.
          </p>
          <a
            className="btn btn-lg btn-outline-info"
            href={numberOne}
            download="w3logo"
          >
            <FontAwesomeIcon icon={faDownload} /> Télécharger le numéro
          </a>
        </div>
      </div>
    </div>
  );
};
export default LilleNomade;
