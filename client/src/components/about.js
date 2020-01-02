import React from "react";
import img from "./img/jungle.jpg";
import Header from "./header";
import HeaderTwo from "./headerTwo";

export default function About() {
  return (
    <div className="container my-5">
      <Header title="À propos" />
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 my-3">
          <p className="text-justify">
            Nouvelle Jungle est une association issue de la rencontre entre des
            citoyens et les habitants de la jungle de Calais, maintenant
            étudiants dans nos universités lilloises, qui a pour objet de
            développer une co-recherche avec l’organisation de manifestations
            artistiques et culturelles (interventions sur le terrain, cinéma,
            théâtre, séminaires, conférences, musique, radios, événements,
            éditions, ateliers, label, expositions) afin d’affermir le sens
            d’appartenance à une communauté urbaine hospitalière qui refuse tout
            mot d’ordre d’exclusion sociale, administrative, économique et
            existentielle. Ce site donne accès aux éditions de notre journal «
            Lille Nomade ». Pour nous joindre, vous pouvez nous envoyer
            directement un mail à nouvellejungle@gmail.com ou nous contacter via
            notre page Facebook.
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magni rerum repellat culpa fuga eveniet sint necessitatibus ut ipsum
            totam voluptatibus facilis, corrupti tenetur hic quia similique,
            minima dignissimos at quo exercitationem iure ipsa laborum quae? A
            cupiditate explicabo consequatur nobis repudiandae alias possimus
            nisi iure facere dolores. Deserunt natus rerum blanditiis digni
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 my-3">
          <img className="img-fluid my-3" src={img} alt="la jungle" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 my-3">
          <HeaderTwo title="Nos activités" />
          <img className="img-fluid" src={img} alt="la jungle" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 my-3">
          <p className="text-justify mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            commodi, nam repellat eius doloribus repudiandae nemo rem
            consequuntur facilis, ipsam nisi quis similique odit sapiente velit
            dolore error consectetur doloremque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus optio quod velit quas
            ipsum iusto beatae nam laborum, eaque reiciendis saepe at sint
            officia deserunt illum necessitatibus nostrum facere quaerat! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            quisquam ipsa. Dignissimos eligendi perspiciatis amet minima
            perferendis modi non voluptates cupiditate animi ratione! Nobis
            impedit debitis recusandae! Delectus sapiente repellat quod quis
            laboriosam ipsum aliquid, quae harum iusto maiores ea, ab, cum
            voluptatibus quibusdam sit earum laudantium illo rem reiciendis
            cupiditate dolores doloribus d voluptatem tenetur ab adipisci
            placeat? Fugiat inventore officiis delectus eligendi rerum. Illum
            omnis dolorem, tempore harum natus odit quam sed accusamus aliquam
            veniam consequatur animi deserunt error molestias a reiciendis
            eveniet cum quasi officiis deleniti excepturi culpa repellendus
            consequuntur. Deleniti nemo perferendis numquam vero inventore
            recusandae voluptate deserunt est porro dicta. Sequi magnam odit
            inventore beatae officiis.
          </p>
        </div>
      </div>
    </div>
  );
}
