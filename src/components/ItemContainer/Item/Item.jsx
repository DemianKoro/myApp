// import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { Link } from "react-router-dom";


const Item = ({ product }) => {


  return (
    <>
      <Link to={`/myApp/products/${product.id}`} >
        <div className="mainHome">
          <div id={`linkProd${product.id}`} data-aos="fade-up" data-aos-duration="3000" className={`image${product.id}`}>
            <img src={product.imagen} alt={product.nombre} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
