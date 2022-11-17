import React, { createContext,useState,useEffect} from "react";
import Data from "../Api/pizzas.json"

export const PizzasContext = createContext()

const Context = ({children}) => {

const [pizzas,setPizzas]=useState()
const [cart,setCart]=useState([])

    useEffect(() => {
        setPizzas(Data)
    }, [])

    return(
        <PizzasContext.Provider
            value={{
                pizzas,
                cart,
                setCart
            }}
        >
            {children}
        </PizzasContext.Provider>
    )

}

export default Context