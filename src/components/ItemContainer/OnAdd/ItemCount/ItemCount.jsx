import * as React from 'react';
import './ItemCount.scss';
import { useContext, } from 'react';
import { CartContext } from '../../../../context/CartContext';



const ItemCount = ({ counter, setCounter, product }) => {

  const { cart, grabarProductoEnCarrito } = useContext(CartContext);

  const handleClick = () => {
    grabarProductoEnCarrito(product, counter);
    console.log (cart)
  };

  return <>
         <div className="mainProducto__carr__form__imputCantidad__botones">
           <button onClick={() => setCounter((prev) => prev > 0 ? prev - 1 : prev)} type="button" className="mainProducto__carr__form__imputCantidad__botones__btn">-</button>
           <p className="mainProducto__carr__form__imputCantidad__botones__btn">{counter}</p>
           <button onClick={() => setCounter((prev) => prev < product.stock ? prev + 1 : prev)} type="button" className="mainProducto__carr__form__imputCantidad__botones__btn">+</button>
           <p> {` (Disponibles: ${product.stock}u.)`} </p>               
        </div>
        <button onClick={handleClick} type="button">Agregar al Carrito</button>
        {/* <div className="mainProducto__carr__form__imputCantidad__botones__comprar">
            {counter ? <button onClick={(() => {setCounter (!counter)})} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Quitar.</button> 
                  :
                  <button onClick={(() => {setCounter (!counter)})} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Agregar.</button>
            }
        </div> */}
          
  </>;
};

export default ItemCount;

