import { Link } from 'react-router-dom';
import cart from './Cart.png';
import './CartWidget.css';
// import { useCart } from '../../contexts/CartContexts';


export const CartWidget = () => {
    // const counter = useCart();
    
    return (
        <div className="cartWidget" >
        <Link to='/cart'>1<img src={cart} className="Cart" alt="Cart" /></Link>
        </div>
    )
}