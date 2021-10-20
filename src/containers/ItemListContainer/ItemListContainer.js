import item from './Pelota.jpg';
import './ItemListContainer.css';
import { useState } from 'react'
import { Counter } from '../../components/ItemCount/ItemCount';


export const ItemListContainer = (props) => {

        const [counter, setCounter] = useState(1)
        const add = () => { 
            if (counter < parseInt(props.stock)) {setCounter (counter + 1)}
        }
        const decreace = () => {
            if (counter > 1) {setCounter (counter - 1)}
        }

    return (
        <div className="itemListContainer" >
            <h1 className="itemTitle">PELOTA COMPETITION ARGENTINA 21</h1>
            <img src={item} className="item" alt="item" />

            <div className='Counter'>
                <Counter value={counter} onAdd={add} onRemove={decreace}/>                
            </div>
        </div>
    )
    // function Counter() {
    //     const [counter, setCounter] = useState(1)
    //     const add = () => { 
    //         if (counter <= 5 ) setCounter (counter + 1)}
    //     const decreace = () => {
    //         if (counter > 1) setCounter (counter - 1)}
    
        // return (
        //     <div className='Counter'>
        //         <button onClick= {decreace} className="buttonLess" id="buttonLess">-</button>
        //         <Counter value={counter} onAdd={add} onRemove={decreace} />
        //     </div>
        // )
}
