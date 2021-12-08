import { useCart } from "../../contexts/CartContexts";
import { addDoc , collection } from "firebase/firestore";
import { getFirestore } from '../../firebase';
import { useState , useEffect } from "react";
import './Cart.css';
import trashItem from './trash-item.png';
import trashCart from './trash-cart.png';
import cartEmpty from './cart-empty.png';
import { Link } from 'react-router-dom'


export const Cart = () =>{

    const {cartItem, totalCart, sumCart, removeAll, removeItem} = useCart();
    const [display, setDisplay] = useState("noDisplay")
    const [buyer, setBuyer] = useState("")


    useEffect(()=>{
        if(cartItem.length > 0){
            sumCart()
        }
    },[sumCart, cartItem])

    function handleChange (evt){
        setBuyer({...buyer, [evt.target.name]: evt.target.value})
    }


    function setOrder () {
        setDisplay("viewOrder")
    }

    function sendOrder () {
        const order ={
            buyer: buyer,
            items: cartItem,
            total: totalCart
        }
        console.log(order)
        const db = getFirestore();
        const ordersCollection = collection (db, "orders");

        addDoc(ordersCollection, order).then(({response})=>console.log(response));
        removeAll()
    };

    return(
        <div className="Cart">
            
    {cartItem.length > 0
        ? <div className="cartCont">

            <button onClick= {removeAll} className="buttonTrash">
                <p className="trashText">Vaciar Carrito</p>
                <img src={trashCart} className="trash" alt="logo" />
            </button>

            {cartItem.map((itemsBuy)=>
                <div className="itemListCart" key={itemsBuy.id}>
                    <img src={itemsBuy.photo} className="imgBuy" alt="item" />
                    <p>${itemsBuy.price}</p>
                    <p className="itemQuantity">Cantidad: {itemsBuy.quantity}</p>
                    <p className="itemName">{itemsBuy.name}</p>
                    <button onClick={() => removeItem(itemsBuy)}  className="buttonTrash">
                        <img src={trashItem} className="trash" alt="logo" />
                    </button>
                </div>
            )}

            <p className="totalCart">El total es $ {totalCart}</p>
            <button onClick= {setOrder}>
                Comprar
            </button>
        
        </div>
        
        :
        <div className="cartEmptyCont">
            <img src={cartEmpty} className="cartEmpty" alt="carrito vacío"/>
            <p className="cartTextEmpty">"El carrito está vacío"</p>
            <li><Link to="/"><button className="ButtonNavBar1">Inicio</button></Link></li>
        </div>
        }

        <div className={display}>
            <label>Nombre</label>
            <input type="text" value= {buyer.name} name="name" onChange={(evt) => handleChange (evt)}></input>

            <label>Teléfono</label>
            <input type="number" value= {buyer.phone} name="phone" onChange={(evt) => handleChange (evt)}></input>

            <label>Email</label>
            <input type="text" value= {buyer.email} name="email" onChange={(evt) => handleChange (evt)}></input>

            <button onClick={sendOrder}>
                <Link to="/">Finalizar Comprar</Link>
            </button>
        </div>

    </div>   
    )
}