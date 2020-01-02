import React from "react";

const HeaderTwo = ({ title, color }) => (
  <header>
    <h4
      style={{
        color: color,
        borderLeft: "7px solid #17d6e8",
        paddingLeft: "5px",
        marginBottom: "20px",
        fontFamily: "Playfair Display, serif",
        fontWeight: "400",
        fontSize: "30px",
        fontStyle: "normal"
      }}
    >
      {title ? title : "add your title here"}
    </h4>
  </header>
);

export default HeaderTwo;
