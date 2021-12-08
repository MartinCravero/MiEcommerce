import logo from './Logo.jpg';
import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';




export const NavBar = () => {

    let categories = ["Futbol", "Tenis", "Hockey", "Runing", "Natación", "Otros"]

    return (
        <div className="NavBar" >
        <img src={logo} className="NavBarLogo" alt="logo" />
        
        <ul>
            <li><Link to="/"><button className="ButtonNavBar1">Inicio</button></Link></li>
            {categories.map((category)=>
                <li><Link to={`/category/${category}`}><button className="Categorias">{category}</button></Link></li>
            )}
        </ul>
        <CartWidget/>
        </div>
    )
}