import React from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { PizzasContext } from '../context/context'
import { useContext } from "react"
import {formatPrice} from "../Utils/utils"
import Ingredients from "../components/ingredients"


const Menu =()=>{

const {pizzas,addToCart, cart}=useContext(PizzasContext)
const navigate = useNavigate ()
const viewPizza =(id)=>navigate(`/pizza/${id}`)

return (
    <section className="menu">
{
    pizzas?.map((item)=>{
        return (
            <div className="card" key={item.id}>
            
                <div className="content">
                    <img src={item.img} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <Ingredients Ingredients={item.ingredients}></Ingredients>
                    <h3 className="price">$ {formatPrice(item.price)}</h3>

                    <div className="btn-row">
                        <button className="btn-primary"onClick={()=>viewPizza(item.id)}>Ver mas</button>
                        <button className="btn-secundary" onClick={() => addToCart(item)}>Añadir</button>
                    </div>
            
                </div>
            </div>
        )

    })
}

    </section>
)
}

export default Menu;