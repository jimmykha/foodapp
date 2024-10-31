import React from "react";
import styles from "./fooditem.module.css";

function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemButtom}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
