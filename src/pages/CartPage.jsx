import * as React from "react";
import { useCart } from '../context/CartContext';
import './CartPage.scss'
// import { useNavigate } from "react-router-dom";


const CartPage = () => {
    const { cart } = useCart();
    // const navigate = useNavigate();

  return (
    <div className="bodyContenedor">
        <h3 className="bodyContenedor__condicion"> ♦ Productos en su Carro de compras : </h3>
        <br></br>
        {cart.map((comprar) => 
        {
                 return (
                    <>
                        <table className="bodyContenedor__detalleCompra" id="detalleCompra">
                            <tr className="bodyContenedor__detalleCompra__enunciados" id="enunciados">
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Descripción</th>
                                <th>Precio Unitario</th>
                                <th>Subtotal</th>
                                <th>Quitar</th>
                            </tr>
                            <tr className="bodyContenedor__detalleCompra__items">  
                                <td className="bodyContenedor__detalleCompra__foto" id="foto">
                                    <img id="fotoCompra" src= {comprar.item.imagen} style={{width:"3rem"}} alt=""></img>
                                </td>
                                <td className="bodyContenedor__detalleCompra__qnty" id="qnty">
                                    <p>{comprar.cantidad}</p>
                                </td>
                                <td className="bodyContenedor__detalleCompra__name" id="name">
                                    <p>{comprar.item.nombre}</p>
                                </td>
                                <td className="bodyContenedor__detalleCompra__price" id="price">
                                    <p>$ {comprar.item.precio}</p> 
                                </td>
                                <td className="bodyContenedor__detalleCompra__subTotal" id="subTotal">
                                    <p>$ {comprar.item.precio * comprar.cantidad}</p> 
                                </td>
                                <td className="bodyContenedor__detalleCompra__quitar" id="quitar">
                                    <button id="quitar" type="button" className="btn-close btn-close-white" data-bs-dismiss="" aria-label="Close"></button>
                                </td>
                            </tr>
                        </table>
                    </>
                );
        })}
    </div>
    );
};

export default CartPage;