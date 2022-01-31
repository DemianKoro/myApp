import React from 'react';
import logo from "../../../../images/kalanchoe.png";
import { Link } from 'react-router-dom';
import "./Logo.scss"

const Logo = () => {
  return <>
            <div className="logo">
                <Link to="/myApp" title="Ponte Color">
                <img id="imagenTitulo" src={logo} alt="LOGO"/>
                </Link>
            </div>
        </>;
};

export default Logo;
