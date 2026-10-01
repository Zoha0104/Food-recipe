function Fooditem({ food, setFoodid }) {
  return (
    <div className="food-card">
      <img
        className="food-image"
        src={food.image}
        alt={food.title}
      />

      <div className="food-info">
        <h2 className="food-title">
          {food.title}
        </h2>

        <button
          className="recipe-button"
          onClick={() => setFoodid(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default Fooditem;