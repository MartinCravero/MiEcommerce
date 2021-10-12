import cart from './Cart.png';
import './CartWidget.css';

export const CartWidget = () => {
    return (
        <div className="cartWidget" >
        <a hRef="www.miecommerce.com/carrito"> 0  <img src={cart} className="Cart" alt="Cart" /></a>
        </div>
    )
}