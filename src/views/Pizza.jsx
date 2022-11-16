import React,{ useContext,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/context";

const Pizza =()=>{
const {id}=useParams()
const { pizzas }=useContext(PizzasContext)

useEffect (()=>{
    
    const pizza = pizzas?.filter((item)=>item.id===id)

},[pizzas])

    return (
        <main>
            <div className="pizza-view">
                <h1>Detalle</h1>
            </div>
        </main>
    )
    }
    
    export default Pizza;