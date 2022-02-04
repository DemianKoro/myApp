import Item from "./Item/Item";
import "./ItemListContainer.scss";
import { useContext } from 'react';
import { ProductsContext } from "../../context/UserContext";


const ItemContainer = () => {

  const { product, error, isLoading } = useContext(ProductsContext)

  if (isLoading) {
    return <p>Cargando Productos...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <div>
        <ul className="item__container">
          {product.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
    
};


export default ItemContainer;