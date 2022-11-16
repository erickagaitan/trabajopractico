import React, { createContext,useState,useEffect} from "react";
import Data from "../Api/pizzas.json"

export const PizzasContext = createContext()

const Context = ({children}) => {

    const [pizzas,setPizzas]=useState()

    useEffect(() => {
        setPizzas(Data)
    }, [])
console.log(pizzas)
    return(
        <PizzasContext.Provider
            value={{
                pizzas,
            }}
        >
            {children}
        </PizzasContext.Provider>
    )

}

export default Context