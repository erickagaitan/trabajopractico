import React,{ useContext,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/ingredients";
import { PizzasContext } from "../context/context";
import { formatPrice } from "../Utils/utils";


const Pizza =()=>{
const {id}=useParams()
const { pizzas }=useContext(PizzasContext)

const [selected, setSelected ] = useState()

useEffect (()=>{
    const pizzaFilter = pizzas?.filter((item)=>item.id===id)
    setSelected(pizzaFilter)
},[id])

    return (
        <main>
            <div className="pizza-view">
                <h1>Detalle</h1>
            </div>

            {
    selected?.map((item)=>{
        return (
            <div className="card" key={item.id}>
            
                <div className="content">
                    <img src={item.img} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <Ingredients Ingredients={item.ingredients}></Ingredients>
                    <h3 className="price">$ {formatPrice(item.price)}</h3>
                    <span>{item.desc} </span>
                    <div className="btn-row">
                       
                        <button className="btn-secundary">Añadir</button>
                    </div>
            
                </div>
            </div>
        )

    })
}
        </main>
    )
    }
    
    export default Pizza;