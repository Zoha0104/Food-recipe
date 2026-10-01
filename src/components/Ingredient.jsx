function Ingredient({ ingredient }) {
  return (
    <div className="ingredient">

      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        alt={ingredient.name}
      />

      <div>
        <h3>{ingredient.name}</h3>

        <p>
          {ingredient.amount} {ingredient.unit}
        </p>
      </div>

    </div>
  );
}

export default Ingredient;