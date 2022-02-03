import './OnAdd.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrito from "../../../Header/LoginMenu/Carrito/Carrito"

function OnAdd(cant) {

  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const URL = `http://localhost:3001/productos/${id}`;

  useEffect(() => {
    const URL = `http://localhost:3001/productos/${id}`;
    // console.log(product);

    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [id]);


  const [stock, setStock] = useState(false); 
  const [qty, setQty] = useState(false)
  const ButtonAdd = () =>{
    setQty(!qty)
    console.log(qty)
  
  }
  // const ButtonQuit = () =>{
  //   setStock(!stock)
  
  // }

  // const setNewStock = () => {
  //   product.stock = product.stock - stock
  //   fetch(URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "applicattion/json" },
  //     body: product.stock
  //   })
  // }
  
  
  if (isLoading || !product) return <p>Cargando...</p>;
  return (
    <div className="mainProducto__carr__form__imputCantidad">
        <div className='mainProducto__carr__form__imputCantidad__cantidad'>
          <Carrito /> {qty ? <p>{stock}</p> : <p>0</p>}
        </div>
        <div className="mainProducto__carr__form__imputCantidad__botones">
          <button onClick={(() => {setStock( stock > 0 ? stock-1 : stock)})} type="button" className="mainProducto__carr__form__imputCantidad__botones__btn">-</button>
          <p className="mainProducto__carr__form__imputCantidad__botones__btn">{stock} </p>
          <button onClick={(() => {setStock( stock < product.stock ? stock+1 : stock)} )} type="button" className="mainProducto__carr__form__imputCantidad__botones__btn">+</button> 
          <div className="mainProducto__carr__form__imputCantidad__botones__comprar">
            {qty ? <button onClick={(() => {setQty (!qty)})} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Quitar.</button> 
                  :
                  <button onClick={ButtonAdd} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Agregar.</button>
            }
          </div>
          <p> {` (Disponibles: ${product.stock}u.)`} </p>
        </div>
        <button onClick={(() => {setStock( product.stock = product.stock - stock) })} type="button" className="mainProducto__carr__form__imputCantidad__botones__comprar2">Comprar</button> 
    </div>
  );


}

export default OnAdd;