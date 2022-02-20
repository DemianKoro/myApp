import {createContext, useContext, useState} from 'react';
import React from 'react';
import swal from 'sweetalert';
export const CartContext = createContext({});
CartContext.displayName = "CartContext";



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = React.useState(0);
    let Order = [];

    const grabarProductoEnCarrito = (item, cantidad) => {
        if (cantidad===0) {
            swal('Debe ingresar una cantidad');
            console.log('La cantidad no puede ser Cero. No se agregó nada al Carrito');
        }
        else {
            const newItem = {item, cantidad };
                                  
            setCart((prevState) => [...prevState, newItem]);
            console.log('Se agregó correctamente', newItem)
           
            Order = [...cart, newItem];
            console.log('Carrito:',[Order])

        }
    }

    

    const borrarProductoEnCarrito = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
        Order = ((prev) => prev.filter((element) => element.item.id !== id)); 
        console.log('Se borró el item del carrito' )
    }

    const vaciarCarrito = () => {
        setCart([]);
        Order = ([]);
        console.log('Se vació el carrito', Order);
    }


  return (
    <CartContext.Provider value={{ cart, grabarProductoEnCarrito, borrarProductoEnCarrito, vaciarCarrito, counter, setCounter }}>
        {children}
    </CartContext.Provider>
 );
};

export const useCart = () => useContext(CartContext);
