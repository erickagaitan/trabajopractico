import React from "react"
import '../App.css'
import { Link } from "react-router-dom"
import Context from '../context/context'


const Notfound=()=>{
return (
 <main className="not-found">
    <h1>404</h1>
    <p>Pagina no encontrada</p>
    <Link to="/" className="btn btn-primary">Home</Link>


 </main>
)
}

export default Notfound;