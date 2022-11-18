import React, { useContext } from "react"
import { PizzasContext } from "../context/context"
import '../App.css'


import Pizza from "./Pizza"
import Navbar from "../components/Navbar"
import Cartlist from "../components/Cartlist"

const Cart =()=>{
    const {cart,pizzas} = useContext(PizzasContext)
return (
    <main>
        <div className="cart">
            <h2>Detalles del pedido</h2>
            {
                cart.length !== 0 ?
                <Cartlist cart={cart}pizzas={pizzas}></Cartlist>
                :<p className="empty-card">No hay elementos en el carrito</p>
            }
        </div>
    </main>
 )
}

export default Cart;