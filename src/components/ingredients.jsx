const Ingredients =({Ingredients})=>{
    return (
        <div className="ingredients">
           <p className="bold">Ingredientes:</p> 
           <ul>
            {
                Ingredients.map((Ingredients)=>{
                    return (
                        <li key={Ingredients}>- {Ingredients}</li>
                    )
                })


            }
           </ul>
        </div>
    )
    }
    
    export default Ingredients;