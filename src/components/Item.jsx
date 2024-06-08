import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImgContainer}>
          <img className={styles.itemImage}
            src={`http://spoonacular.com/cdn/ingredients_100x100/` + item.image}
            alt="image of ingredient"
          />
        </div>

        <div className={styles.itemContainerContent}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmount}>{item.amount} {item.unit}</div>
        </div>
      </div>
    </div>
  );
}
