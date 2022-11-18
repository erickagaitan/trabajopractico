import React, { createContext,useState,useEffect} from "react";
import Data from "../Api/pizzas.json"
import { formatPrice } from "../Utils/utils";

export const PizzasContext = createContext()

const Context = ({children}) => {
const [pizzas,setPizzas]=useState()
const [cart,setCart]=useState([])

    useEffect(() => {
        setPizzas(Data)
    }, [])

    const addToCart = (item) => {
        const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
        const updateCart = [...cart]

        if(itemIndex === -1){
            const pizza = {
                id:item.id,
                count:1,
                price:item.price,
                img:item.img,
                name:item.name
            }
            updateCart.push(pizza)
        } else {
            updateCart[itemIndex].count += 1
        }

        setCart(updateCart)
    }
    
    const removefromCart = (item) => {
        const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
        const updateCart = [...cart]
        updateCart[itemIndex].count -= 1
        if(updateCart[itemIndex].count <= 0) {
            updateCart.slice(itemIndex, 1)
        }
        setCart(updateCart)
    }
    const cartTotal = () => {
        let total = 0
        cart.forEach((item) => total+= item.count * item.price)
        return formatPrice(total)
    }


    return(
        <PizzasContext.Provider
            value={{
                pizzas,
                cart,
                addToCart,
                removefromCart,
                cartTotal
            }}
        >
            {children}
        </PizzasContext.Provider>
    )

}

export default Context