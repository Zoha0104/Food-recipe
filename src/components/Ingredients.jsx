import Ingredient from "./Ingredient.jsx";

function Ingredients({ ingredients }) {
  return (
    <div className="ingredients">
      {ingredients?.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
}

export default Ingredients;