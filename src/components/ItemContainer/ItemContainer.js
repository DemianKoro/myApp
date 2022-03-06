import Item from "./Item/Item";
import "./ItemContainer.scss";
import { useContext } from 'react';
import { ProductsContext } from "../../context/ProductsContext";


const ItemContainer = () => {

  const { product, error, isLoading } = useContext(ProductsContext)

  if (isLoading) {
    return <p>Cargando Productos...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <>
        <ul className="mainBox">
          {product.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </>
    );
    
};


export default ItemContainer;