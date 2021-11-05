import { Link } from 'react-router-dom';
import cart from './Cart.png';
import './CartWidget.css';


export const CartWidget = () => {
    return (
        <div className="cartWidget" >
        {/* <a href="www.miecommerce.com/carrito"> 0  <img src={cart} className="Cart" alt="Cart" /></a> */}
        <Link to='/cart'>0  <img src={cart} className="Cart" alt="Cart" /></Link>
        </div>
    )
}