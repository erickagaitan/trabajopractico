import React from "react"
import '../App.css'
import { Link } from "react-router-dom"
import Context from '../context/context'
import Home from "../views/Home"


const Header =()=>{
return (
    <header className="home-header">
<h1>¡Pizzeria Mamma Mia!</h1>
<p>Tenemos las mejores y mas deliciosas pizzas</p>
    </header>
)
}

export default Header;