import React from "react"
import '../App.css'
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Context from '../context/context'
import Menu from "../components/Menu"


const Home =()=>{
return (
    <div>
        <Header></Header>
        <main>
            <p></p>
            <Menu />
        </main>
    </div>
)
}

export default Home;