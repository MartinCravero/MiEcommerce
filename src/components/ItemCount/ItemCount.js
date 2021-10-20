import './ItemCount.css'

export const Counter = ({value, onAdd, onRemove}) =>{

    return(
        <div className='Counter'>
            <button onClick= {onRemove} className="buttonLess" id="buttonLess">-</button>
            <p>{value}</p>
            <button onClick= {onAdd} className="buttonMore" id="buttonMore">+</button>
        </div>
    )
}




