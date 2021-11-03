import { useState } from 'react';
import './ItemDetail.css';

export const ItemDetail = ({product}) => { 

    /////////----LÓGICA DE DETALLE PRODUCTO----/////////
        const [flag, setFlag] = useState(true)
        const changeFlag = () => {
            setFlag(!flag)
        }

        const [id, setId] = useState(null)
        const setNewId = (i) => {
            setId(id)
        }

    return (
        <div className="Item">
            <div className="ImagenCont">
                <img className="Imagen" src={product.photo} alt=""/>
            </div>
            <div className="Data">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <button onClick= {changeFlag & setNewId} id={product.id = id}>"Ver Más"</button>               
            </div>
        </div>
    );
};

