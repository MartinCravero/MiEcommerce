import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from '../../firebase';
import { useCart } from '../../contexts/CartContexts';


export const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [producto, setProducto] = useState (null);
    const { getFromCart} = useCart();


    useEffect(() =>{
            const db = getFirestore();
            const productoFiltrado = doc(db, "items", itemId);
            getDoc(productoFiltrado).then((snapshot)=> {
                if (snapshot){
                    let productNewId = ({...snapshot.data(), id:itemId})
                    if (getFromCart(productNewId)) {
                        let productFilter = getFromCart(productNewId)
                        setProducto(productFilter);
                    } else {
                        setProducto(productNewId);
                    }
                }
            })
        }, [itemId, getFromCart]);

    return (

        <div className="itemList">
            {producto
            ? 
                <ItemDetail  product={producto} key={producto.id} />
        : "Loading..."}
        
        </div>

    )
}