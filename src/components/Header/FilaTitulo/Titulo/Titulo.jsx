import React from "react";
import { Link } from "react-router-dom";
import "./Titulo.scss"

const Titulo = () => {
  return (
    <>
      <div className="titulo">
        <Link to="/myApp" title="Ponte Color">
          <h1>KALANCHOE</h1>
        </Link>
      </div>
    </>
  );
};

export default Titulo;
