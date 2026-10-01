import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import OuterContainer from "./components/OuterContainer";
import InnerContainer from "./components/InnerContainer";
import Foodlist from "./components/Foodlist";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodid, setFoodid] = useState("656329");

  return (
    <>
      <Navbar />

      <Search
        setFoodData={setFoodData}
      />

      <OuterContainer>
        <InnerContainer>
          <Foodlist
            foodData={foodData}
            setFoodid={setFoodid}
          />

          <RecipeDetails
            foodid={foodid}
          />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;