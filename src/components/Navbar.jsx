import React, {useContext} from "react"
import { PizzasContext } from "../context/context"
import '../App.css'

import { Link } from "react-router-dom"


const Navbar=()=>{

const { cart } = useContext(PizzasContext)

return (
  <nav className="main-nav">
    <Link to="/"><h3><i class="fa-solid fa-pizza-slice"></i>Mamma Mia!</h3></Link>
    <Link to="/carrito"><i class="fa-solid fa-cart-shopping"></i> {cart.length} </Link>

  </nav>
)
}

export default Navbar;