import React from "react";
import { NavLink } from "react-router-dom";

const MealCard = ({ detail }) => {
  console.log(detail);
  return (
    <div className="meals ">
      {!detail
        ? " "
        : detail.map((curItems) => {
            return (
              <div className="mealImg">
                <img src={curItems.strMealThumb} />
                <p>{curItems.strMeal}</p>
                <NavLink to={`/${curItems.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default MealCard;
