import './Navbar.scss';
// import CartWidget from './CartWidget/CartWidget';
import NavIcon from './NavIcon/NavIcon';
// import CartCounter from './CartCounter/CartCounter';
import { Link } from "react-router-dom";


function Navbar() {


    return <nav className='nav'>
                <ul className='ulNav'>
                    <li>
                        <NavIcon/>
                    </li>
                    <li>
                        <Link to="/myApp">HOME</Link>
                    </li>
                    <li>
                        <Link to="/myApp/products">PRODUCTS</Link>
                    </li>
                    <li>
                    <   Link to="/myApp/asdasd">CONTACT US</Link>
                    </li>
                </ul>
                
           </nav>;

}

export default Navbar;