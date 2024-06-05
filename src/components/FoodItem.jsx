export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.img} alt="food" />
      <h2>{food.title}</h2>
      <button>View Recipe</button>
    </div>
  );
}
