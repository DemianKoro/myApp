import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../../../../context/UserContext";
import { getFirestore } from "../../../../firebase";
// import $ from 'jquery';
import "./Login.scss";
import { LoginContext } from "../../../../context/LoginContext";

const Login = () => {

  // const { user } = useContext(UserContext)
  const { loger } = useContext(LoginContext);
  

  function mostrarContrasena(){
    var tipo = document.getElementById("floatingPassword");
    if(tipo.type === "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  const USERID = {

    email,
    password,

  };

  const loginUser = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    
  }

  

  const handleSubmit = () => {
    // evt.preventDefault();          
    console.log("Intento de Ingreso, Usuario:", USERID);

    loginUser();

  }

  return (
    <>
      <button type="button" id="loginBtn" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <HiOutlineUserCircle className="img" />
      </button>
      <div className="welcome" key={loger.id}>
            <p>Bienvenido </p>
            <p>    {loger.map((loger) =>{
                return (

                  (`${ loger.nombre}`)               

                );  
              })}</p>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="staticBackdropLabel">ACCEDÉ A TU CUENTA</h6>
            <button type="button" id="close" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form className="modal-body" id="formulario" action="#"
            onSubmit={handleSubmit}
            >
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required="required"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Correo Eléctronico</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                minLength="8"
                required="required"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
              <button className="showPass" type="button" onClick={(mostrarContrasena)}><BiHide /> </button>

              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <br></br>
            <div className="mb-2 row gy-3">
                <div className="col-sm-12">
                  <p>¿Olvidaste tu contraseña?</p>
                </div>
                <div className="col-sm-12">
                  {/* <a href="#"> */}
                  <button type="submit" id="addData" className="btn btn-secondary" data-bs-dismiss="modal" >INGRESAR</button>
                  <input type="submit"  id="btnOculto"></input>
                  {/* </a> */}

                </div>
                <div className="col-sm-12">
                  <a href="https://www.facebook.com">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">INGRESAR CON FACEBOOK</button>
                  </a>
                </div>
                <div className="col-sm-12">
                <Link to="/myApp/LoginPage">
                  <button type="button" className="registrateBtnCerrar" id="close" data-bs-dismiss="modal" aria-label="Close">
                    <p>¿Aun no tenés tu usuario? Registrate ahora</p>
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
