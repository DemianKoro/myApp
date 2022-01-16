import './Navbar.css';
import CartWidget from './CartWidget/CartWidget';
import NavIcon from './NavIcon/NavIcon';

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
                    <li>
                        <CartWidget />
                    </li>
                </ul>
                
           </nav>;

}

export default Navbar;