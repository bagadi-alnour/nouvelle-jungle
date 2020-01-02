import React, { useState } from "react";
import axios from "axios";
import Header from "../header";
import NavbarAdmin from "../navbarAdmin";
const EventAdd = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAdress] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const eventFields = { name, time, img, date, address, description };
    if (!img) {
      alert("Il faut Ajouter un image");
    } else {
      axios.post("/api/event/add", eventFields).then(res => {
        if (res.data === "OK") {
          setMsg("Un événement vient d'être ajouter");
          setTimeout(() => {
            window.location = "/eventList";
          }, 3000);
        } else {
          alert("Il y a un problèm");
        }
      });
    }
  };
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeDate = e => {
    setDate(e.target.value);
  };
  const onChangeTime = e => {
    setTime(e.target.value);
  };

  const onChangeAdress = e => {
    setAdress(e.target.value);
  };

  const onChangeDicription = e => {
    setDescription(e.target.value);
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "bgaato",
        upload_preset: "np3v5bpe",
        tags: ["article"]
      },
      function(error, result) {
        setImg(result[0].secure_url);
      }
    );
  };
  return (
    <div className="container my-5">
      <NavbarAdmin />

      <Header title="Céer un événement" />

      {msg ? (
        <div class="alert alert-success" role="alert">
          {msg}
        </div>
      ) : null}
      <div className="form-group">
        <button
          onClick={() => uploadWidget()}
          className="btn-outline-default btn-block p-1"
        >
          Uploud image
        </button>
      </div>
      <form onSubmit={onSubmit} className="my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlfor="name">Le nom du événement:</label>
              <input
                required
                type="text"
                className="form-control"
                id="name"
                placeholder="Soiréé, conférénce..."
                onChange={onChangeName}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlfor="adress">L'adresse:</label>
              <input
                required
                type="text"
                className="form-control"
                id="adress"
                placeholder="123 Rue de..."
                onChange={onChangeAdress}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlfor="date">La Date:</label>
              <input
                required
                type="date"
                format="yyyy/dd/mm/"
                className="form-control input-lg"
                id="date"
                onChange={onChangeDate}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <label htmlfor="time">L'heure:</label>
            <input
              required
              type="time"
              className="form-control  p-2"
              id="time"
              onChange={onChangeTime}
            />
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Example textarea</label>
              <textarea
                required
                class="form-control"
                rows="5"
                onChange={onChangeDicription}
              />
            </div>
          </div>
          <div className="col-lg-12" />
          <div className="col">
            <input
              className="btn btn-lg btn-success"
              type="submit"
              value="Créer un événement"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventAdd;
