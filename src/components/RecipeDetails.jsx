import { useEffect, useState } from "react";
import Ingredients from "./Ingredients.jsx";

function RecipeDetails({ foodid }) {
  const [recipe, setRecipe] = useState(null);

  const API_KEY = "1bbf3921167249ed8baa87342dad80b5";

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const URL = `https://api.spoonacular.com/recipes/${foodid}/information?apiKey=${API_KEY}`;

        const response = await fetch(URL);
        const data = await response.json();

        console.log(data);

        setRecipe(data);
      } catch (error) {
        console.log("Error fetching recipe:", error);
      }
    }

    fetchRecipe();
  }, [foodid]);

  if (!recipe) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="recipe-details">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-detail-image"
      />

      <h1>{recipe.title}</h1>

      <div className="recipe-info">
        <p>⏱️ {recipe.readyInMinutes} minutes</p>
        <p>👥 Servings: {recipe.servings}</p>
      </div>

      <h2>Ingredients</h2>

      <Ingredients
        ingredients={recipe.extendedIngredients}
      />

      <h2>Instructions</h2>

      {recipe.instructions ? (
        <div
          className="instructions"
          dangerouslySetInnerHTML={{
            __html: recipe.instructions,
          }}
        />
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  );
}

export default RecipeDetails;