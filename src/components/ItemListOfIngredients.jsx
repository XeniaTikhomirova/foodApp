import Item from "./Item";

export default function ItemListOfIngredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Data is Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
