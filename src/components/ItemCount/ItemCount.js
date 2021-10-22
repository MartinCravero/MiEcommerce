import './ItemCount.css'

export const Counter = ({value, onAdd, onRemove}) =>{

    return(
        <>
            <button onClick= {onRemove} id="buttonLess">-</button>
            <p>{value}</p>
            <button onClick= {onAdd} id="buttonMore">+</button>
        </>
    )
}




