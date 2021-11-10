import './ItemDetail.css';
import { Counter } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({product}) => { 

        ////----LÓGICA DE CONTADOR----////
        const [counter, setCounter] = useState(1)
        const add = () => { 
            if (counter < parseInt(product.stock)) {setCounter (counter + 1)}
        }
        const decreace = () => {
            if (counter > 1) {setCounter (counter - 1)}
        }

        const [display, setDisplay] = useState("windows")
        const windows = () => { 
            setDisplay ("windowsActive")
        }
    

    ///////----LÓGICA DE DETALLE PRODUCTO----/////////

        console.log(product)
    return (
        <div className="Item">
            <div className="ImagenCont">
                <img className="Imagen" src={product.photo} alt=""/>
                <div className='Counter'>
                <Counter value={counter} onAdd={add} onRemove={decreace} windowsBuy={windows}/>
                </div>
            </div>
            <div className="Data">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <p>{product.detail}</p>
            </div>
            <div className={display}>
            <h1>Usted añadió al carrito "{product.name}"</h1>
            <p>Por una cantidad de {counter} unidades</p>
            <div className="optionsBuy">
                <Link key={product.id}  to={'/'}><button>Seguir comprando</button></Link>
                <Link key={product.id}  to={'/cart'}><button>Ir al carrito</button></Link>
            </div>
            </div>
        </div>
    );
};

