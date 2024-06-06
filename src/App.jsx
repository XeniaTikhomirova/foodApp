import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import { useState } from "react";
import Nav from "./components/Nav";
import "./app.css";
import FoodDetailComponent from "./components/FoodDetailComponent";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("648506");

  return (
    <div className="App">
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetailComponent foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
