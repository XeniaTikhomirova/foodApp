import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import { useState } from "react";
import Nav from "./components/Nav";
import "./app.css"

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="app" >
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
