const Ingredients =({Ingredients})=>{
    return (
        <div className="ingredients">
           <p className="bold">Ingredientes:</p> 
           <ul>
            {
                Ingredients.map((ingredients)=>{
                    return (
                        <li key={ingredients}>- {ingredients}</li>
                    )
                })


            }
           </ul>
        </div>
    )
    }
    
    export default Ingredients;