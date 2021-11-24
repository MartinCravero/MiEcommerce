import { createContext, useContext } from "react";
import { useState } from "react";
// import { useParams } from "react-router";
// import  Products  from "../Products.json";
import { useEffect } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

            ////----FILTRADO Y AGREGADO AL CARRITO ----////

            const [ cartItem, setCart] = useState ([]);
            

            function getFromCart (product) {
                return cartItem.find(item => item.id === product.id)
            }

            function isInCart (product) {
                if (getFromCart(product) !== undefined){
                    console.log("entre")
                    return true
                }
                
            }


            function addToCart (product, counter) {
                if (isInCart(product) === true) {
                    console.log('Este producto ya se encuentra en el carrito');
                    return;
                }
                else{
                    console.log("agregaste este producto")
                    product.cuantity = counter
                    setCart([...cartItem, product])
                }
            }

            useEffect(() =>{
                console.log(cartItem)
            },[cartItem])
            
    return <CartContext.Provider value={{addToCart, cartItem}}>
        {children}
    </CartContext.Provider>
}