export default function FoodCard({ food }) {
  return <article className="food-card"><div className="food-emoji">{food.emoji}</div><div className="food-info"><b>{food.name}</b><span>{food.category}</span><div className="food-macros"><span>{food.calories} kcal</span><span>{food.protein}g protein</span></div></div></article>;
}
