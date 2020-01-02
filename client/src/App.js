import React from "react";
import "./App.css";
import "./components/global";
import NavBar from "./components/navbar";
import FooterMenu from "./components/footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <NavBar />

      <FooterMenu />
    </div>
  );
}

export default App;
