import React, { useEffect, useState } from "react";
import Frase from "./components/Frase";
import "bootstrap/dist/css/bootstrap.min.css";
import thesimpsons from "../src/components/img/theSimpson.png";
import "../src/App.css";
import { Button } from "react-bootstrap";
import Spinner from "./components/Spinner";

const App = () => {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    setMostrarSpinner(true);
    const respuesta = await fetch(
      "http://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const dato = await respuesta.json();
    setPersonaje(dato[0]);
    setTimeout(() => {
      setMostrarSpinner(false);
    }, 1500);
  };

  //operador ternario (condicion logica)? que hacer si es verdadero: que hacer si es falso
  const mostrarComponente = (mostrarSpinner === true) ? <Spinner></Spinner> : <Frase personaje={personaje}></Frase>;
  return (
    <div className="bg-fondo-web">
      <div className="container py-5 text-center">
        <img src={thesimpsons} className="width" alt="thesimpsons" />
      </div>
      <div className="text-center pb-10">
        <Button className="btn btn-color" onClick={consultarApi}>
          <p className="my-0 text-btn-style">Obtener frase</p>
        </Button>
      </div>
      {mostrarComponente}
    </div>
  );
};

export default App;
