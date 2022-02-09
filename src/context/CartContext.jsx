import {createContext, useContext, useState} from 'react';
export const CartContext = createContext({});
CartContext.displayName = "CartContext";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
     
    const grabarProductoEnCarrito = (item, cantidad) => {
        const newItem = {item, cantidad };
        setCart((prevState) => [...prevState, newItem]);
        console.log('Se agregó correctamente', newItem)
    };

    const borrarProductoEnCarrito = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
        console.log('Se borró el item del carrito')
    }

    const vaciarCarrito = () => {
        setCart([]);
    }


  return (
    <CartContext.Provider value={{ cart, grabarProductoEnCarrito, borrarProductoEnCarrito, vaciarCarrito }}>
        {children}
    </CartContext.Provider>
 );
};

export const useCart = () => useContext(CartContext);
