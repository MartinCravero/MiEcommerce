import './ItemCount.css'

export const Counter = ({value, onAdd, onRemove, windowsBuy}) =>{

    return(
        <>
            <div className="countContainer">
            <button onClick= {onRemove} id="buttonLess">-</button>
            <p className="cuantity">{value}</p>
            <button onClick= {onAdd} id="buttonMore">+</button>
            </div>
            <button onClick= {windowsBuy} id="buttonBuy">Comprar</button>
        </>
    )
}




