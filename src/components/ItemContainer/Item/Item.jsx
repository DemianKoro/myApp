// import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { Link } from "react-router-dom";


const Item = ({ product }) => {


  return (
    <>
      <Link to={`/myApp/products/${product.id}`}>
        <div className="item__card">
          <div className="img__container">
            <img src={product.imagen} alt={product.nombre} />
          </div>
          {/* <div className="descripcion">
            <p>{product.nombre}</p>
            <p>Descripcion: {product.descripcion}</p>
            <p>Precio: $ {product.precio}</p>
            {/* <button onClick={() => navigate(`/myApp/products/${product.id}`)}>
              Ver más...
            </button> */}
          {/* //</div> */}
        </div>
      </Link>
    </>
  );
};

export default Item;
