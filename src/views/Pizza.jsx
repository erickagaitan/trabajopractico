import React,{ useContext,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/ingredients";
import { PizzasContext } from "../context/context";
import { formatPrice } from "../Utils/utils";
import Cart from "./Cart";


const Pizza =()=>{
const { id } = useParams()
const { pizzas, setCart, cart }=useContext(PizzasContext)
const [selected, setSelected ] = useState([])

useEffect (()=>{
    const pizzaFilter = pizzas?.filter((item)=>item.id===id)
    setSelected(pizzaFilter)
},[id])


console.log(cart)

    return (
        <main>
            <div className="pizza-view">
                <h1></h1>
            </div>

            {
                
    selected?.map((item)=>{
        return (
            <div className="card-pizza" key={item.id}>
            
                <div className="content-pizza">
                    <div className="content-pizza-img">
                        <img src={item.img} alt={item.name}/>
                    </div>
                    <div className="content-pizza-info">
                        <h4>{item.name}</h4>
                        <span>{item.desc} </span>
                        <Ingredients Ingredients={item.ingredients}></Ingredients>
                
                       
                        <div className="btn-row-pizza">
                            <h3 className="price">$ {formatPrice(item.price)}</h3>
                       
                            <button className="btn-primary" onClick={() => setCart([...cart,item])}>Añadir</button>
                        </div>
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