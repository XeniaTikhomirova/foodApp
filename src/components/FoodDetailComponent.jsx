import { useEffect, useState } from "react";
import styles from "./fooddetailcomponent.module.css";

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
    <div className={styles.foodDetail}>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="food Image" />
      </div>

      <div>
        <span>
          ⏳ Time of preparation:
          <strong> {food.readyInMinutes} Minutes </strong>{" "}
        </span>

        <br />

        <span>
          🍴Serves <strong> {food.servings}</strong> people
        </span>

        <br />

        <span>
          <strong>
            {food.vegetarian ? "🥦 Vegetarian" : "🥩 Not Vegeterian"}
          </strong>
        </span>
      </div>

      <div>
        <span>{food.pricePerServing / 100} 💲 Per serving</span>
      </div>

      <div>
        Instructions:
        {isLoading ? (
          <p>Data is Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => {
            <li>{step.step}</li>;
          })
        )}
      </div>
    </div>
  );
}
