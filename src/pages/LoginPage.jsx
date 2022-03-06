import React from 'react'
import { getFirestore } from "../firebase";
// import { doc, deleteDoc } from "firebase/firestore";
import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
// import $ from 'jquery';
import "./LoginPage.scss";


const LoginPage = () => {
  const Login = getFirestore();
  const collection = Login.collection("usuarios");

  const { user } = useContext(UserContext)

  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Se intentará crear el usuario:", USUARIO);
  }
 
  const USUARIO = {
    nombre,
    apellido,
    email,
    password,
    
  };

  // function validarForm() {
  //   if (password !=="" ||
  //   confirmPassword !=="" ||
  //   confirmPassword !== password ||
  //   nombre !=="" ||
  //   apellido !=="" ||
  //   email !=="") {
  //     return false
  //   } else {
  //     return true
  //   }
    

  // }
    

  const crearUsuarioEnFirestore = () => {
  
    collection
      .add(USUARIO)
      .then((res) => console.log("Usuario Agregado:", res.id))
      .catch((err) => console.log("Se ha producido un Error:", err));
          
  };
  
  const deleteUser = (url) => {
    const db = getFirestore();
    const collection = db.collection("usuarios");
    const document = collection.doc(url);

    document
      .delete()
      .then((res) => console.log("Usuario Borrado:", res))
      .catch((err) => console.log("Se ha producido un Error:", err));
       
    
  };

      

  return (
    <div className="LoginPage">
      <h1>Crear nuevo usuario</h1>
      <h3>Por favor ingrese sus datos para registrarse.</h3>
      <br />
      <div className="LoginPage__body" >
        {/* <div className="LoginPage__body__imagenContainer" >
          <img src={imagen} alt="" />
        </div> */}
        <form className="LoginPage__body__form" onSubmit={handleSubmit} >
          <label htmlFor="nombre"></label>
          Nombre<input className='form-control'
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required="required"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
          />
          <label htmlFor="apellido"></label>
          Apellido<input className='form-control'
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            required="required"
            value={apellido}
            onChange={e=>setApellido(e.target.value)}
          />
          <label htmlFor="email"></label>
          Email<input className='form-control'
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            required="required"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
         Password:<label htmlFor="password"></label>
          <input className='form-control'
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            minLength="8"
            required="required"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          Confirme su Password<label htmlFor="confirmPassword"></label>
          <input className='form-control'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme su Password"
            minLength="8"
            required="required"
            value={confirmPassword}
            onChange={e=>setConfirmPassword(e.target.value)}
          />
          <br />          
          <input onClick= {crearUsuarioEnFirestore} type="submit" value="Crear Usuario" />
        </form>
      </div>
      <br />
      <h3>Lista de usuarios</h3>
      <br />
      <table style= {{
        border:"1px solid white",
        color:"ivory",
        width:"80%",
        textAlign:"center",
      }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>email</th>
            <th>Password</th>
            <th>Acciones</th>
          </tr>
          {user.map((user) =>{
            return (
              <tr key={user.id}>
                <td>{`"${user.id}"`}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td> 
                  <button onClick={() => deleteUser(user.id)}>Borrar</button>
                </td>
              </tr>    
            );
          })}
        </tbody>
      </table>
    </div>
  );

};


export default LoginPage