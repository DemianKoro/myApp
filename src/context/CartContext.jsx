import {createContext, useContext, useState} from 'react';
export const CartContext = createContext({});
CartContext.displayName = "CartContext";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);

    const grabarProductoEnCarrito = (item, cantidad) => {
        if (cantidad==0) {
            alert('Debe ingresar una cantidad');
            console.log('La cantidad no puede ser Cero. No se agregó nada al Carrito');
        }
        else {
            const newItem = {item, cantidad };
            setCart((prevState) => [...prevState, newItem]);
            console.log('Se agregó correctamente', newItem)

            const ITEMS = [];
            
            const CARRITO = [...ITEMS, newItem]
            console.log('Carrito:',CARRITO)


        }
    }


    const borrarProductoEnCarrito = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
        console.log('Se borró el item del carrito')
    }

    const vaciarCarrito = () => {
        setCart([]);
        console.log('Se vació el carrito');
    }


  return (
    <CartContext.Provider value={{ cart, grabarProductoEnCarrito, borrarProductoEnCarrito, vaciarCarrito }}>
        {children}
    </CartContext.Provider>
 );
};

export const useCart = () => useContext(CartContext);
