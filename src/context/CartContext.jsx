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

    const borrarProductoEnCarrito = (item, cantidad) => {
        const deleteItem = {item, cantidad };
        setCart((prevState) => [...prevState]);
        console.log('Se borró el item del carrito', deleteItem)
    }


  return (
    <CartContext.Provider value={{ cart, grabarProductoEnCarrito, borrarProductoEnCarrito }}>
        {children}
    </CartContext.Provider>
 );
};

export const useCart = () => useContext(CartContext);
