import React from "react";

const Header = ({ title }) => (
  <header>
    <h2
      style={{
        color: "#000",
        marginTop: "30px",
        borderLeft: "7px solid red",
        paddingLeft: "5px",
        marginBottom: "20px",
        fontFamily: "Playfair Display, serif",
        fontWeight: "400",
        fontSize: "40px",
        fontStyle: "normal"
      }}
    >
      {title ? title : "add your title here"}
    </h2>
  </header>
);

export default Header;
