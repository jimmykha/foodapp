import React from "react";
import Item from "./Item";

function ItemIngList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}

export default ItemIngList;
