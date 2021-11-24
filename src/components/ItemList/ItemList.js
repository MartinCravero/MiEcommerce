import './ItemList.css';
import { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'


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
        const db = getFirestore();
        getDocs(collection(db, "items")).then((snapshot) => {
            console.log(snapshot);
            const article = snapshot.docs.map((doc) => doc.data())
            const categoryFiltrada = article.filter(x=>x.category === categoryItem)
            if (!categoryItem) {
                setProductos(article);
                } else {
                            setProductos(categoryFiltrada)
                        }
            console.log(productos)
            
        });
    }, [categoryItem]);

        // getProducts(Products)
    //     .then((res) =>{
    //         const categoryFiltrada = res.filter(x=>x.category === categoryItem)
    //         console.log(categoryFiltrada)
    //         if (!categoryItem) {
    //             setProductos(res)
    //         } else {
    //             setProductos(categoryFiltrada)
    //         }
    //     })
    //     .catch((err) => console.log(err));
    // }, [categoryItem]);

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