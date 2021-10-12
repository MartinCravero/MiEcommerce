import logo from './Logo.jpg';
import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div className="NavBar" >
        <img src={logo} className="NavBarLogo" alt="logo" />
        <button className="ButtonNavBar1">Inicio</button>
        <ul>
            <li className="Categorias">Tecnología</li>
            <li className="Categorias">Hogar y Muebles</li>
            <li className="Categorias">Electrodomésticos</li>
            <li className="Categorias">Herramientas</li>
            <li className="Categorias">Deportes y Fitness</li>
            <li className="Categorias">Moda</li>
        </ul>
        <button className="ButtonNavBar2">Login</button>
        <CartWidget/>
        </div>
    )
}