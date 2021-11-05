import logo from './Logo.jpg';
import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="NavBar" >
        <img src={logo} className="NavBarLogo" alt="logo" />
        <button className="ButtonNavBar1"><Link to="/">Inicio</Link></button>
        <ul>
            
            <li className="Categorias"><Link to="/category/Futbol">Fútbol</Link></li>
            
            <li className="Categorias"><Link to="/category/Tenis">Tenis</Link></li>
            {/* <li className="Categorias">Runing</li> */}
            <li className="Categorias"><Link to="/category/Hockey">Hockey</Link></li>
            {/* <li className="Categorias">Natación</li> */}
            <li className="Categorias">Otros</li>
        </ul>
        <button className="ButtonNavBar2">Login</button>
        <CartWidget/>
        </div>
    )
}