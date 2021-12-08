import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


const CartContext = createContext();


export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

            ////----FILTRADO Y AGREGADO AL CARRITO ----////

            const [ cartItem, setCart] = useState ([]);
            const [ cartQuantity, setcartQuantity] = useState(0);
            const [ totalCart, setTotalCart] = useState(0)
            

            function getFromCart (product) {
                return cartItem.find(item => item.id === product.id)
            }

            function isInCart (product) {
                if (getFromCart(product) !== undefined){
                    return true
                }
                
            }

            function addToCart (product, counter) {
                if (isInCart(product) === true) {
                    product.quantity = product.quantity + counter
                    product.remaider = product.stock - product.quantity
                    setcartQuantity(cartQuantity + counter)
                    
                }
                else{
                    product.quantity = counter
                    console.log(product.quantity)
                    product.total = product.quantity * product.price
                    product.remaider = product.stock - product.quantity
                    setcartQuantity (cartQuantity + counter)
                    setCart([...cartItem, product])
                }
            }

            function sumCart (){
                let totalItem =[]
                cartItem.map((product)=>
                    totalItem.push(product.total)
                );
                let sumatoria = totalItem.reduce((a,b)=>a+b)
                console.log(sumatoria)
                setTotalCart(sumatoria)
            }

            function removeItem (product){
                let itemRemove = cartItem.filter(item => item.id !== product.id)
                setcartQuantity(cartQuantity - product.quantity)
                product.quantity = 0
                setCart(itemRemove)
            }

            function removeAll (){
                setcartQuantity(0)
                setCart([])
            }

            useEffect(() =>{
                console.log(cartItem)
            },[cartItem])
            
    return <CartContext.Provider value={{addToCart, cartItem, cartQuantity, totalCart, sumCart, getFromCart,removeItem, removeAll}}>
        {children}
    </CartContext.Provider>
}