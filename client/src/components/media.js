import React, { Component } from "react";
import Header from "./header";
import HeaderTwo from "./headerTwo";

export default class Media extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Média" />
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            src="https://player.vimeo.com/video/345107385"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            title="a la frentière, Perchée"
          />
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <HeaderTwo title="À la frontière, Perchée" />
            <p>
              Un film de Babak Inanloo, présenté par NJ une première fois au
              Kino-ciné du campus de Villeneuve d’Ascq de l’Université de Lille
              le 31 mai 2019. Entre la France et l’Italie, pas loin de la Vallée
              de la Roya, où les militants se battent à côté des réfugiés à qui
              l’on interdit de passer la frontière, un village vidé attend lui
              aussi d’être repeuplé par des étrangers venus de très loin, depuis
              l’Odyssée, les Cantos d’ Ezra Pound, depuis Pasolini et ses Alì
              aux yeux bleus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
