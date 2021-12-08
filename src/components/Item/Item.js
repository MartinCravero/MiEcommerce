import './Item.css';
import { Link } from 'react-router-dom';


export const Item = ({product}) => { 


    return (
        <div className="Item">
            <div className="ImagenCont">
                <img className="Imagen" src={product.photo} alt=""/>
            </div>
            <div className="Data">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                { product.remaider === product.stock ?
                <p>La cantidad disponible es {product.stock}</p>
            :
            <p>La cantidad disponible es {product.remaider}</p>}
                <Link key={product.id}  to={`/item/${product.id}`}>"Ver Más"</Link>               
            </div>
        </div>
    );
};
