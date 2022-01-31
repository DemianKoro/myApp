// import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { Link } from "react-router-dom";
// import image01 from "../../../images/image01.jpg";
// import image02 from "../../../images/image02.jpg";
// import image03 from "../../../images/image03.jpg";

const Item = ({ product }) => {
  // const navigate = useNavigate();
  // const URL= (`../../images/image0${product.id}.jpg`);

  return (
    <>
      <Link to={`/myApp/products/${product.id}`}>
        <div className="item__card">
          <div className="img__container">
            <img src={product.imagen} alt={product.nombre} />
          </div>
          <div className="descripcion">
            <p>{product.nombre}</p>
            <p>Descripcion: {product.descripcion}</p>
            <p>Precio: $ {product.precio}</p>
            {/* <button onClick={() => navigate(`/myApp/products/${product.id}`)}>
              Ver más...
            </button> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
