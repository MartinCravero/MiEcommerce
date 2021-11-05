import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import Products from '../../Products.json';
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [producto, setProducto] = useState (null);

    const getProducto = () => 
        new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                if (Products) {
                    resolve(Products)
                } else {
                    reject("No existen detalles del producto.");
                }
            }, 3000);
        });

    useEffect(() =>{
        getProducto()
        .then((res) =>{
            const productoFiltrado = res.find(x => x.id === parseInt(itemId))
                console.log(productoFiltrado)
                setProducto(productoFiltrado)
        } )
        .catch((err) => console.log(err));
    }, [itemId]);

    return (

        <div className="itemList">
            {producto
            ? 
                <ItemDetail  product={producto} key={producto.id} />
        : "Loading..."}
        
        </div>

    )
}