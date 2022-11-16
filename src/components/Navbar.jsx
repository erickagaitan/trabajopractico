import React from "react"
import '../App.css'
import Context from '../context/context'
import { Link } from "react-router-dom"

const Navbar=()=>{
return (
  <nav className="main-nav">
    <Link to="/"><h3><i class="fa-solid fa-pizza-slice"></i>Mamma Mia!</h3></Link>
    <Link to="/carrito"><i class="fa-solid fa-cart-shopping"></i></Link>

  </nav>
)
}

export default Navbar;