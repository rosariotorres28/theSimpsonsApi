import React from "react";
import Frase from "./components/Frase";
import "bootstrap/dist/css/bootstrap.min.css";
import thesimpsons from "../src/components/img/theSimpson.png";
import "../src/App.css";
const App = () => {
  return (
    <div className="bg-fondo-web">
      <div className="container py-5 text-center">
        <img src={thesimpsons} className="width" alt="thesimpsons" />
      </div>
      <div className="text-center pb-10">
        <button className="btn btn-color">
            <p className="my-0 text-btn-style">Obtener frase</p>
        </button>
      </div>

      <Frase></Frase>
    </div>
  );
};

export default App;
