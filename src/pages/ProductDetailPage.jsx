import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const URL = `http://localhost:3001/productos/${id}`;
    // console.log(product);

    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading || !product) return <p>Cargando...</p>;
  return (
    <div>
      <h1>{product.nombre}</h1>
      <img src={product.imagen} alt={product.nombre} />
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: $ {product.precio}</p>
    </div>
  );
};

export default ProductDetailPage;
