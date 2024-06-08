import { useEffect, useState } from "react";
import styles from "./fooddetailcomponent.module.css";
import ItemListOfIngredients from "./ItemListOfIngredients.jsx";

export default function FoodDetailComponent({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  //const apiKey = "";
  console.log(URL);

  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await resp.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} alt="food Image" className={styles.recipeImg} />

        <div className={styles.recipeDetails}>
          <span>
            ⏳ Time of preparation:
            <strong> {food.readyInMinutes} Minutes </strong>{" "}
          </span>

          <span>
            🍴Serves <strong> {food.servings}</strong> people
          </span>

          <span>
            <strong>
              {food.vegetarian ? "🥦 Vegetarian" : "🥩 Not Vegeterian"}
            </strong>
          </span>
        </div>

        <div>
          <span>{(food.pricePerServing / 100).toFixed(2)} 💲 Per serving</span>
        </div>

        <h3>Ingredients:</h3>
         <ItemListOfIngredients food={food} isLoading={isLoading} />

        <h3>Instructions:</h3>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Data is Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
