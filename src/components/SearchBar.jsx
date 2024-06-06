import { useEffect, useState } from "react";
import styles from "./searchbars.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
//const apiKey = process.env.REACT_APP_API_KEY;
//const apiKey = "";


export default function SearchBar({ foodData, setFoodData }) {
  const [query, setQuery] = useState("sushi");

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchUrl();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </div>
  );
}
