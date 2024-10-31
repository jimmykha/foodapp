import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemIngList from "./ItemIngList";

function FoodDetails({ foodid }) {
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "2885b35ec50f4fa382c450eb25e1652f";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [foodid]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👨‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing} Per Serving </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemIngList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>

        <div className={styles.recipeinstructions}>
          <ol>
            {isLoading ? (
              <p>Loading ...</p>
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

export default FoodDetails;
