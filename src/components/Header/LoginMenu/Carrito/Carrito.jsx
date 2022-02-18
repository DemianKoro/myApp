import './Carrito.scss'
import { GiShoppingBag } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../context/CartContext';
import { useContext, useState } from 'react';



const Carrito = () => {

    const { cart, grabarProductoEnCarrito, counter} =useContext(CartContext);
    
    return (
        <>
            <Link to="/myApp/cartPage" >
            <GiShoppingBag className='img'/>
            <p>{counter ? <p>{counter}</p> : <p>{""}</p>}</p>
            </Link>
        </>
    )
}

export default Carrito ;