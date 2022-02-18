import React from "react";
import { getFirestore } from "../firebase";

const PRODUCT = {
    nombre: "Short Rings",
    descripcion: "Short cortito que muestra bastante.",
    precio: 5500,
    stock: 10,
    imagen: "https://i.postimg.cc/bNTzfT13/85.jpg",
    categoriaId: 3,
};

const DbPage = () => {

  const crearProductoEnFirestore = () => {
    const db = getFirestore();
    const collection = db.collection("productos");
    collection
      .add(PRODUCT)
      .then((res) => console.log("Producto Agregado:", res.id))
      .catch((err) => console.log("Se ha producido un Error:", err));
  }

  return (
    <div>
      <h1>DB Page</h1>
      <button onClick={crearProductoEnFirestore}>Agregar a FireStore</button>
    </div>
  );
};

export default DbPage;
