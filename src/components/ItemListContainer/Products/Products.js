import React from 'react'
import './Products.css';
import { useEffect, useState } from "react";
import { getProducts } from "./baseDeDatos";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getProducts()
          .then((data) => setProducts(data))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
    }, []);

    
    return (
        <div className="product">
            <img src={products.img} alt={products.nombre} />
            <p>Nombre: {products.nombre}</p>
            <p>Descripcion: {products.descripcion}</p>
            <p>Precio: {products.precio}</p>
        </div>
        
    )
    
}



export default Products


// import { useEffect, useState } from "react";
// import { getProductos } from "./baseDeDatos";
// import "./App.css";
// import Item from "./components/Item";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getProductos()
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(error))
//       .finally(() => setIsLoading(false));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Holis!</h1>
//       {isLoading ? (
//         <p>Cargando...</p>
//       ) : (
//         products.map((product) => <Item key={product.id} product={product} />)
//       )}
//     </div>
//   );
// }

// export default App;