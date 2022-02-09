import './Carrito.scss'
import { GiShoppingBag } from 'react-icons/gi'
import { Link } from 'react-router-dom';



const Carrito = () => {
    
    return (
        <>
            <Link to="/myApp/cartPage" >
            <GiShoppingBag className='img'/>
            </Link>
        </>
    )
}

export default Carrito ;