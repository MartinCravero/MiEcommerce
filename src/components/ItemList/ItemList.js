import './ItemList.css';
import { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import Products from '../../Products.json';
import { useParams } from 'react-router'


export const ItemList = () => {
    const [productos, setProductos] = useState ([]);
    const {categoryItem} = useParams()


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
        .then((res) =>{
            const categoryFiltrada = res.filter(x=>x.category === categoryItem)
            console.log(categoryFiltrada)
            if (!categoryItem) {
                setProductos(res)
            } else {
                setProductos(categoryFiltrada)
            }
            // setProductos(categoryItem)
            // res.filter(x=>x.category === categoryItem)
            // setProductos(res)
        })
        .catch((err) => console.log(err));
    }, [categoryItem]);

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
