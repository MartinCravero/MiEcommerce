import item from './Pelota.jpg';
import './ItemListContainer.css';

export const itemListContainer = () => {
    return (
        <div className="itemListContainer" >
            <h1 className="itemTitle">PELOTA COMPETITION ARGENTINA 21</h1>
            <img src={item} className="item" alt="item" />
            <div className="buttonsBuy">
                <button className="buttonLess" id="buttonLess">-</button>
                Comprar
                <button className="buttonMore" id="buttonMore">+</button>
            </div>
        </div>
    )
}