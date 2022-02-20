import React from "react";
import { getFirestore } from "../firebase";
import "./DbPage.scss"

// ↓ Constante para subir un producto ya declarado en un objeto ↓ a Firestore //

// const PRODUCTO = {
//   nombre: "Short Rings",
//   descripcion: "Short cortito que muestra bastante.",
//   precio: 5500,
//   stock: 10,
//   imagen: "https://i.postimg.cc/bNTzfT13/85.jpg",
//   categoriaId: 3,
// };

//////////////////////////////////////////////////////////////////////

// ↓ Constante para subir varios productos ya declarados en un Array ↓ a Firestore //

// const PRODUCTOS = [
//   {
//     nombre: "Vestido Snail",
//     precio: 17700,
//     descripcion:
//       "Vestido corto estampado con mangas. Abierto adelante con pequeños botones, escote en V. Presenta botones en puños.",
//     imagen: "https://i.postimg.cc/5NWNNdHh/image01.jpg",
//     stock: 14,
//     caterogiaId: 1,
//   },
//   {
//     nombre: "Sweater Zigzag",
//     descripcion:
//       "Sweater con escote redondo y moldería al cuerpo. Tiene estampa de rayas zigzag multicolor sobre fondo crudo o azul. Ideal para combinar con jeans en tu look de todos los días.",
//     precio: 18800,
//     stock: 7,
//     imagen: "https://i.postimg.cc/qMcBNbyz/image02.jpg",
//     caterogiaId: 2,
//   },
//   {
//     nombre: "Vestido Squamas",
//     descripcion:
//       "Vestido largo estampado de manga larga. Cuello redondo. Combina muy bien con botas altas hasta la rodilla y maquillaje en los parpados con purpurina.",
//     precio: 19500,
//     stock: 2,
//     imagen: "https://i.postimg.cc/jSsxPH4v/image03.jpg",
//     caterogiaId: 1,
//   },
// ];

// para hacer un form de carga de producto, ver video GMT20220209-220719_Recording_1920x1080 de la clase 13 FireBase II ( MINUTO : 00:48 aprox) //

const DbPage = () => {
  const db = getFirestore();
  const collection = db.collection("productos");

  const [nombre, setNombre] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [categotriaId, setCategoriaId] = React.useState("");
  const [imagen, setImagen] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Se creo el Producto", PRODUCTO);
  }
 
  const PRODUCTO = {
    nombre,
    descripcion,
    precio,
    imagen,
    stock,
    categotriaId,
  };

  const crearProductoEnFirestore = () => {
    collection
      .add(PRODUCTO)
      .then((res) => console.log("Producto Agregado:", res.id))
      .catch((err) => console.log("Se ha producido un Error:", err));
  };

  // const crearColeccionEnFirestore = () => {
  //   PRODUCTOS.forEach((producto) => {
  //     collection
  //       .add(producto)
  //       .then((res) => console.log("Producto Agregado:", res.id))
  //       .catch((err) => console.log("Se ha producido un Error:", err));
  //   });
  // };

  return (
    <div className="dbPage">
      <h1>Data Base Page</h1>
      <h3>Formulario para cargar nuevos productos a la base de datos.</h3>
      <br />
      <div className="dbPage__body" >
        <div className="dbPage__body__imagenContainer" >
          <img src={imagen} alt="" />
        </div>
        <form className="dbPage__body__form" onSubmit={handleSubmit} >
          <label htmlFor="name"></label>
          Nombre del Producto<input 
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del Producto"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
          />
          <label htmlFor="precio"></label>
          Precio: $<input 
            type="number"
            id="precio"
            name="precio"
            placeholder="precio del Producto"
            value={precio}
            onChange={e=>setPrecio(e.target.value)}
          />
          <label htmlFor="stock"></label>
          Stock<input 
            type="number"
            id="stock"
            name="stock"
            placeholder="Cantidad en Stock"
            value={stock}
            onChange={e=>setStock(e.target.value)}
          />
          Descripción:<label htmlFor="descripcion"></label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Decripción del Producto"
            value={descripcion}
            onChange={e=>setDescripcion(e.target.value)}
          />
          Nº de Id<label htmlFor="categoriaId"></label>
          <input
            type="number"
            id="categoriaId"
            name="caterogiaId"
            placeholder="Número de tipo de Producto"
            value={categotriaId}
            onChange={e=>setCategoriaId(e.target.value)}
          />
          Url de la imágen <label htmlFor="imagen"></label>
          <input
            type="text"
            id="imagen"
            name="iamgen"
            placeholder="Url de la Imágen"
            value={imagen}
            onChange={e=>setImagen(e.target.value)}
          />
          <input type="submit" value="Crear Producto" />
        </form>
      </div>
      <br />
      <button onClick={crearProductoEnFirestore}>Agregar Producto a Base de Datos</button>
      {/* <button onClick={crearColeccionEnFirestore}>Agregar Colección</button> */}
    </div>
  );

};

export default DbPage;
