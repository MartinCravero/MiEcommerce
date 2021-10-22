import './ItemList.css';
import { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import Products from '../../Products.json';


export const ItemList = () => {
    const [productos, setProductos] = useState ([]);

    const getProducts = (items) =>
    new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if (items) {
                resolve(items);
            } else {
                reject("No existen productos para esta busqueda, intenta con otra.");
            }
        }, 2000);
    });
    useEffect(() =>{
        getProducts(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
    }, []);

    return (

        <div className="itemList">
            {productos.length
            ? productos.map((producto) => (
                <Item product={producto} key={producto.id} />
            ))
        : "Loading..."}
        </div>

    )
}
