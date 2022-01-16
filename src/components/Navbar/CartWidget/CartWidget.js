import './CartWidget.css'
//import CartImg from './cart.png';
import { GiShoppingBag } from 'react-icons/gi'

// function CartWidget() {
//     return <img src={CartImg} className="cartImg" alt="cartImg" />
// }

const NavIcon = () => {
    return (
        <>
            <GiShoppingBag className='cartImg'/>
        </>
    )
}

//export default CartWidget;
export default NavIcon ;
