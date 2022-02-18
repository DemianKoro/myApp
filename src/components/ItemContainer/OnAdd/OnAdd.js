import './OnAdd.scss';
import * as React from "react";
import Carrito from "../../Header/LoginMenu/Carrito/Carrito"
import { useContext, useState } from 'react';
import { ProductsContext } from '../../../context/ProductsContext';
import { CartContext } from '../../../context/CartContext';
import ItemCount from '../OnAdd/ItemCount/ItemCount';
import { GiShoppingBag } from 'react-icons/gi'




function OnAdd({product}) {

  const { isLoading, agregarProducto, borrarProducto, cambiarStock } = useContext(ProductsContext);
  const { cart, grabarProductoEnCarrito, counter, setCounter } =useContext(CartContext);

  // const [counter, setCounter] = React.useState(0);
  // const [stock, setStock] = useState(false); 
  // const [qty, setQty] = useState(false)
  // const ButtonAdd = () =>{
  //   setQty(!qty)
   
  // }
  
  // const setCart = () => {
  //   console.log(stock)
  // }
   
  if (isLoading || !product) return <p>Cargando...</p>;
  return (
    <div className="mainProducto__carr__form__imputCantidad">
        <div className='mainProducto__carr__form__imputCantidad__cantidad'>
        <GiShoppingBag className='img'/> {counter ? <p>{counter}</p> : <p>0</p>}
        </div>
        {/* <div className="mainProducto__carr__form__imputCantidad__botones">
          
          <div className="mainProducto__carr__form__imputCantidad__botones__comprar">
            {qty ? <button onClick={(() => {setQty (!qty)})} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Quitar.</button> 
                  :
                  <button onClick={ButtonAdd} type="button" id="addCompra" className="mainProducto__carr__form__imputCantidad__botones__comprar" >Agregar.</button>
            }
          </div>
          <p> {` (Disponibles: ${product.stock}u.)`} </p>
        </div> */}
        <ItemCount counter={counter} setCounter={setCounter} key={product.id} product={product}/>
        {/* <button onClick={(() => {setStock( product.stock = product.stock - stock) })} type="button" className="mainProducto__carr__form__imputCantidad__botones__comprar2">Comprar</button> 
        <button onClick={(() => agregarProducto())} type="button" className="mainProducto__carr__form__imputCantidad__botones__comprar3">nuevo producto</button> 
        <button onClick={(() => borrarProducto(product.id))} type="button" className="mainProducto__carr__form__imputCantidad__botones__comprar4">borrar producto</button> 
        <button onClick={(() => cambiarStock(product.id, product.stock))} type="button" className="mainProducto__carr__form__imputCantidad__botones__comprar3">Stock</button> */}

    </div>
  );


}

export default OnAdd;

