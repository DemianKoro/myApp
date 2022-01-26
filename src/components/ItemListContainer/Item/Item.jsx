import { useNavigate } from "react-router-dom";
import "./Item.scss";


const Item = ({ product }) => {
  const navigate = useNavigate();
  const URL= (`../images/image0${product.id}.jpg`);
  
  return (
    <div className="item__card">
      <div className="img__container">
        <img src={URL} alt={product.nombre} />
      </div>
      <p>{product.nombre}</p>
      <p>Descripcion: {product.descripcion}</p>
      <p>Precio: $ {product.precio}</p>
      {/* <button onClick={() => navigate(`/products/${product.id}`)}>
        Ver más...
      </button> */}
    </div>
  );
};

export default Item;
