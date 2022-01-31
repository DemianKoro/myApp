import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "../components/ItemListContainer/Item/Item.scss"
import "./ProductDetailPage.scss";
import OnAdd from "../components/ItemListContainer/ItenCount/OnAdd/OnAdd";
// import CartWidget from "../components/Navbar/CartWidget/CartWidget"


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

  const navigate = useNavigate();

  if (isLoading || !product) return <p>Cargando...</p>;
  return (
    <div className="mainProducto">
      <div className="mainProducto__img">
        <img
          className="imagenProducto1"
          src={product.imagen}
          alt={product.nombre}
        />
      </div>
      <div className="mainProducto__carr">
        <div className="mainProducto__carr__encabezado">
          <h1>{product.nombre}</h1>
          <h2>$ {product.precio}</h2>
        </div>
        <form className="mainProducto__carr__form">
          <select
            name="talles"
            id=""
            className="mainProducto__carr__form__talles"
          >
            <option value="">Talle</option>
            <option value="5413" price="0">
              XS
            </option>
            <option value="5414" price="0">
              S
            </option>
            <option value="5804" price="0">
              M
            </option>
            <option value="5415" price="0">
              L
            </option>
          </select>
          <a id="botonTalle" className="mainProducto__carr__form__guiaBtn">
            Guía de Talles
          </a>
          <h4 className="mainProducto__carr_form__detalles__abierto" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Detalles del producto. </h4>
          <div className="mainProducto__carr__form__descripcion" id="">
           <p className="colapseShow"  id="collapseExample"> {product.descripcion}</p>
          </div>
          <span
            className="mainProducto__carr__form__span"
            id="SpanInputCantidad"
            value=""
          >
            Cantidad
          </span>
          {/* <CartWidget /> */}
          <OnAdd />
          <div className="mainProducto__carr__form__volver">
            <button className="mainProducto__carr__form__volver__btn" onClick={() => navigate("/myApp/")}>Volver atrás.</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailPage;
