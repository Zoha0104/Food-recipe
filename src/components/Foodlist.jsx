import Fooditem from "./Fooditem";

function Foodlist({ foodData, setFoodid }) {
  console.log("Foodlist data:", foodData);

  if (!foodData || foodData.length === 0) {
    return <p className="no-results">No recipes found.</p>;
  }

  return (
    <div className="food-list">
      {foodData.map((food) => (
        <Fooditem
          key={food.id}
          food={food}
          setFoodid={setFoodid}
        />
      ))}
    </div>
  );
}

export default Foodlist;