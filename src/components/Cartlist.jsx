import { formatPrice } from "../Utils/utils";
import { Link } from "react-router-dom";
import '../App.css'


const Cartlist =({ cart })=>{
    return (
        
            <div className="cartlist">
                <ul>
                {
                    cart.map((item)=>{

                      return (
                        <li key={item.id}>
                            <div className="product">
                                <img src={item.img} alt={item.name}/>
                                <h4>{item.name}</h4>
                            </div>
                                <div className="pricefinal">
                                    <h4 className="precio">${formatPrice(item.price)}</h4>
                                    <div className="cotenedorbtn">
                                        <div className="btns"></div>
                                        <button className="btn btn-primary">-</button>
                                        <p className="bold">1</p>
                                        <button className="btn btn-secundary">+</button>
                                    </div>
                                </div>
                        </li>
                        )  
                    })
                }

                </ul>
                <div className="total">
                    <h3> Total:$0</h3>
                    <Link to="/pagar" className="btn-final">Ir a pagar</Link>
                </div>
            </div>
    
     )
    }
    
    export default Cartlist;