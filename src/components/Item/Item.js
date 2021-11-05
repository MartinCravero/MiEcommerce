import { useState } from 'react';
import { Counter } from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';


export const Item = ({product}) => { 
    
    ////----LÓGICA DE CONTADOR----////
        const [counter, setCounter] = useState(1)
        const add = () => { 
            if (counter < parseInt(product.stock)) {setCounter (counter + 1)}
        }
        const decreace = () => {
            if (counter > 1) {setCounter (counter - 1)}
        }
    
    return (
        <div className="Item">
            <div className="ImagenCont">
                <img className="Imagen" src={product.photo} alt=""/>
            </div>
            <div className="Data">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <p>La cantidad disponible es {product.stock}</p>
                <div className='Counter'>
                    <Counter value={counter} onAdd={add} onRemove={decreace}/>
                </div> 
                <Link key={product.id}  to={`/item/${product.id}`}>"Ver Más"</Link>               
            </div>
        </div>
    );
};
