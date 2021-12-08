import './ItemList.css';
import { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useCart } from '../../contexts/CartContexts';


export const ItemList = () => {
    const [productos, setProductos] = useState ([]);
    const {categoryItem} = useParams()

    const { cartItem , getFromCart} = useCart();

    useEffect(() =>{
        const db = getFirestore();
        getDocs(collection(db, "items")).then((snapshot) => {
            const article = snapshot.docs.map((doc) => {
                const productActualizado = ({...doc.data(), id:doc.id})
                if (getFromCart(productActualizado)) {
                    return getFromCart(productActualizado)
                } else {
                    return productActualizado
                }
        })
            const categoryFiltrada = article.filter(x=>x.category === categoryItem)
            if (!categoryItem) {
                setProductos(article);
                } else {
                            setProductos(categoryFiltrada)
                        }
        });
    }, [categoryItem, cartItem, getFromCart]);

    return (

        <div className="itemList">
            {productos.length
            ? productos.map((producto) => (
                <Item  product={producto} key={producto.id} />
            ))
        : "Loading..."}
        </div>

    )
}