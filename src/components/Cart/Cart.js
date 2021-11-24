import { useCart } from "../../contexts/CartContexts";


export const Cart = () =>{

    const {cartItem} = useCart();

    return(
        <div className="itemList">

    {cartItem
        ? cartItem.map((itemsBuy)=> 

            <div className="itemList" key={itemsBuy.id}>
                <p>{itemsBuy.price}</p>
                <p>{itemsBuy.cuantity}</p>
                <p>{itemsBuy.name}</p>
            </div>
        )
    : "El carrito está vacío"}
    </div>
            
    
    )
}