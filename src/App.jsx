import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="app">
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
