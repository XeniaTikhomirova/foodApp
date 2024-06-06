import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemConteiner}>
      <div className={styles.itemContent}>
        <img className={styles.itemImg} src={food.image} alt="food" />
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
