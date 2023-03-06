import Styles from './Recipe.module.css'

const Recipe= (props)=>{
    // console.log(props.recipeList.recipe.image)
    return <div className={Styles.recipe}>
        
        <img src={props.recipeList.recipe.image} className={Styles.image} />
        <h2>{props.recipeList.recipe.label}</h2>
        <h5>Calories: {props.recipeList.recipe.calories}</h5>
        <p>Ingredients</p>
        <ol>
            {/* {console.log(props.recipeList.recipe.ingredients)} */}
            {props.recipeList.recipe.ingredients.map((ingredient,idx)=> <li key={idx}>{ingredient.text}</li>)}

        </ol>
        {/* <p>{props.recipeList.recipe.ingredientLines}</p> */}
    </div>
}

export default Recipe