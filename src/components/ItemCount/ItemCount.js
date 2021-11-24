// import { useCart } from '../../contexts/CartContexts'
import './ItemCount.css'

export const Counter = ({value, onAdd, onRemove, windowsBuy}) =>{

    // const addToCart = useCart ()



    return(
        <>
            <div className="countContainer">
            <button onClick= {onRemove}>-</button>
            <p className="cuantity">{value}</p>
            <button onClick= {onAdd}>+</button>
            </div>
            <button onClick={windowsBuy} className="buttonBuy">Comprar</button>
        </>
    )
}




