import { useEffect, useState } from "react";
import Item from "./Item/Item";
import "./ItemListContainer.scss";

const URL = "http://localhost:3001/productos";

const ItemContainer = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProd(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Cargando Productos...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <div>
        <ul className="item__container">
          {prod.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
};

export default ItemContainer;