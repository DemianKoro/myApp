import './Navbar.scss';
import CartWidget from './CartWidget/CartWidget';
import NavIcon from './NavIcon/NavIcon';
import CartCounter from './CartCounter/CartCounter';


function Navbar() {


    return <nav className='nav'>
                <h1>KALANCHOE</h1>
                <ul className='ulNav'>
                    <li>
                        <NavIcon/>
                    </li>
                    <li>
                        <a href='./404.html'>HOME</a>
                    </li>
                    <li>
                        <a href='./404.html'>PRODUCTS</a>
                    </li>
                    <li>
                        <a href='./404.html'>CONTACT</a>
                    </li>
                    <li className='cartLi'>
                        <CartWidget />
                        <CartCounter />
                    </li>
                </ul>
                
           </nav>;

}

export default Navbar;