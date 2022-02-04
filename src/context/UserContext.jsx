import { createContext, useContext, useEffect, useState } from "react";
export const ProductsContext = createContext({});
ProductsContext.displayName = "productsContext";

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/productos/")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

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
    <ProductsContext.Provider
      value={{
        product,
        error,
        isLoading,
        agregarProducto,
        borrarProducto,
        cambiarStock,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
