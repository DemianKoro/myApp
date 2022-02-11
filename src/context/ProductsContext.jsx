import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import React from "react";

export const ProductsContext = createContext({});
ProductsContext.displayName = "productsContext";


export const ProductsProvider = ({ children }) => {
  // const [data, setData] = React.useState([]);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // // ↓ FIREBASE ↓ //

  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = db
    .collection("productos")
    // .where("categoriaId", "==", 1); // FILTRO
    
    productsCollection.get()

    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try {
      const response = await productsCollection.get();
      if(response.empty) {
        console.log("No hay Productos");
      }
      setProduct(response.docs.map((doc) => ({...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
  }, []);
  
  // // ↑ FIREBASE ↑ //

  // // ↓ FETCH METHOD ( reemplazado por el firebase) ↓ //

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("http://localhost:3001/productos/")
  //     .then((response) => response.json())
  //     .then((json) => setProduct(json))
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // // ↑ FETCH METHOD ( reemplazado por el firebase) ↑ //

  // ↓↓↓ AGREGAR PRODUCTO de prueba (Falta reemplazar por producto de formulario) ↓ //

  const agregarProducto = async () => {
    const pushProduct = {
      nombre: "Short Rings",
      descripcion: "Short cortito que muestra bastante.",
      precio: 5500,
      stock: 10,
      imagen: "https://i.postimg.cc/bNTzfT13/85.jpg",
      tipo: "Short",
    };

    const response = await fetch("http://localhost:3001/productos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pushProduct),
    })
    .then((console.log("Producto Agregado Exitosamente")));

    return response.json();
  };

  // ↑↑↑ AGREGAR PRODUCTO de prueba (Falta reemplazar por producto de formulario) ↑ //

  // ↓↓↓ BORRAR PRODUCTO ↓ //

  function borrarProducto(id) {
    fetch("http://localhost:3001/productos/" + id, {
      method: "DELETE",
    })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // ↑↑↑ BORRAR PRODUCTO ↑ //

  // ↓↓↓ CAMBIAR STOCK ↓ //

  function cambiarStock(id, stock) {
    fetch("http://localhost:3001/productos/" + id, {
      method: "PATCH",
      body: JSON.stringify({stock})
    })
      // .then(() => {console.log("Stock actualizado");})
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch(err => {
      console.error(err)
    })
    
  }

  // ↑↑↑ CAMBIAR STOCK ↑ //

  return (
    <ProductsContext.Provider value={{product, error, isLoading, agregarProducto, borrarProducto, cambiarStock, }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
