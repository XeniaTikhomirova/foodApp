import { useEffect, useState } from "react";
import styles from "./searchbars.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "1bc2e04b8b76461ca797c7fffca61dda";

export default function SearchBar({ foodData, setFoodData }) {
  const [query, setQuery] = useState("sushi");

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchUrl();
  }, [query]);

  return (
    <div className={styles.header}>
      <input
        type="text"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </div>
  );
}
